import React, { useRef, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from './firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function ArticleForm() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [file, setFile] = useState(null);
  const [uploadPct, setUploadPct] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const fileInputRef = useRef(null);

  
  const uploadImageResumable = (file) =>
    new Promise((resolve, reject) => {
      const storageRef = ref(storage, `articles/${Date.now()}_${file.name}`);
      const task = uploadBytesResumable(storageRef, file);

      task.on(
        'state_changed',
        (snap) => setUploadPct(Math.round((snap.bytesTransferred / snap.totalBytes) * 100)),
        (err) => reject(err),
        async () => {
          const url = await getDownloadURL(task.snapshot.ref);
          resolve(url);
        }
      );
    });

  const handleUploadClick = async () => {
    if (!file) return alert('Please choose an image first.');
    try {
      const url = await uploadImageResumable(file);
      setImageUrl(url);
      alert('Image uploaded!');
    } catch (err) {
      console.error('upload error', err);
      alert('Upload failed. Check Storage rules and try again.');
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Title is required');

    setBusy(true);
    try {
      // If user forgot to press Upload but selected a file, upload now
      let finalUrl = imageUrl;
      if (!finalUrl && file) {
        finalUrl = await uploadImageResumable(file);
        setImageUrl(finalUrl);
      }

      await addDoc(collection(db, 'articles'), {
        title: title.trim(),
        abstract: abstract.trim(),
        content: content.trim(),
        tag: tag.trim(),
        imageUrl: finalUrl || '',
        createdAt: serverTimestamp(),
      });

      // reset
      setTitle(''); setAbstract(''); setContent(''); setTag('');
      setFile(null); setImageUrl(''); setUploadPct(0);
      if (fileInputRef.current) fileInputRef.current.value = '';
      alert('Article posted!');
    } catch (err) {
      console.error(err);
      alert('Failed to post article.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="card" onSubmit={onSubmit}>
      <h3>Post an Article</h3>

      <input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />

      {/* Add an image: [filename] [Browse] [Upload] */}
      <div className="row" style={{alignItems:'center'}}>
        <input className="input" readOnly placeholder="No file chosen" value={file ? file.name : ''} />
        <button type="button" className="btn" onClick={()=>fileInputRef.current?.click()}>Browse</button>
        <button type="button" className="btn" onClick={handleUploadClick} disabled={!file || !!imageUrl}>
          Upload
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{display:'none'}}
          onChange={e=>{
            setFile(e.target.files?.[0] || null);
            setImageUrl('');
            setUploadPct(0);
          }}
        />
      </div>

      {uploadPct > 0 && uploadPct < 100 && <div className="meta">Uploading… {uploadPct}%</div>}
      {imageUrl && (
        <div className="row" style={{alignItems:'flex-start'}}>
          <img src={imageUrl} alt="preview" style={{maxWidth:160, borderRadius:8}} />
          <div className="meta" style={{wordBreak:'break-all'}}>{imageUrl}</div>
        </div>
      )}

      <input className="input" placeholder="Abstract" value={abstract} onChange={e=>setAbstract(e.target.value)} />
      <textarea className="textarea" rows={6} placeholder="Article Text" value={content} onChange={e=>setContent(e.target.value)} />
      <input className="input" placeholder="Tags (comma/space separated)" value={tag} onChange={e=>setTag(e.target.value)} />

      <button className="btn primary" type="submit" disabled={busy}>{busy ? 'Posting…' : 'Post'}</button>
    </form>
  );
}
