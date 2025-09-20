import React, { useState } from 'react';
import { Container, Header, Form, Button, Segment } from 'semantic-ui-react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';

export default function PostEditor() {
  const [type, setType] = useState('question');   // question | article
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState(
`# Example question
I can't get this function to return the right value.

\`\`\`js
function add(a, b){
  return a + b
}
\`\`\`

Any ideas?
`);
  const [preview, setPreview] = useState(false);

  const handleSubmit = () => {
    
    localStorage.setItem('lastPost', JSON.stringify({ type, title, markdown }));
    alert('Post saved (demo).');
  };

  return (
    <Container className="page">
      <Header as="h1">Create a Post</Header>

      <Form>
        <Form.Group widths="equal">
          <Form.Select
            label="Post Type"
            options={[
              { key: 'q', text: 'Question', value: 'question' },
              { key: 'a', text: 'Article', value: 'article' },
            ]}
            value={type}
            onChange={(_, d) => setType(d.value)}
          />
          <Form.Input
            label="Title"
            placeholder="e.g., Why is my add() returning undefined?"
            value={title}
            onChange={(_, d) => setTitle(d.value)}
          />
        </Form.Group>

        <Form.Field>
          <label>Content (Markdown + Code)</label>
          <Segment style={{ padding: 0, overflow: 'hidden', borderRadius: 12 }}>
            {preview ? (
              <div style={{ padding: 16 }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            ) : (
              <CodeMirror
                value={markdown}
                options={{
                  mode: 'markdown',
                  theme: 'material',
                  lineNumbers: true,
                  lineWrapping: true,
                }}
                onBeforeChange={(_editor, _data, value) => setMarkdown(value)}
              />
            )}
          </Segment>
        </Form.Field>

        <Button type="button" basic onClick={() => setPreview(!preview)}>
          {preview ? 'Edit' : 'Preview'}
        </Button>
        <Button color="green" onClick={handleSubmit} style={{ marginLeft: 10 }}>
          Publish
        </Button>
      </Form>
    </Container>
  );
}
