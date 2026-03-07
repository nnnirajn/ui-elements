import { Editor } from 'https://esm.sh/@tiptap/core'
import StarterKit from 'https://esm.sh/@tiptap/starter-kit'

const editorEl = document.getElementById('editor')
const toolbar = document.querySelector('.toolbar')

const editor = new Editor({
  element: editorEl,
  extensions: [StarterKit],
  content: '<p>Start typing here… Use the toolbar for <strong>bold</strong>, <em>italic</em>, headings, lists, and more.</p>',
  editorProps: {
    attributes: {
      class: 'tiptap',
    },
  },
})

function updateToolbarActiveState() {
  toolbar.querySelectorAll('.toolbar-btn').forEach((btn) => {
    const action = btn.dataset.action
    const level = btn.dataset.level
    let active = false
    if (action === 'bold') active = editor.isActive('bold')
    else if (action === 'italic') active = editor.isActive('italic')
    else if (action === 'strike') active = editor.isActive('strike')
    else if (action === 'heading' && level) active = editor.isActive('heading', { level: Number(level) })
    else if (action === 'paragraph') active = editor.isActive('paragraph')
    else if (action === 'bulletList') active = editor.isActive('bulletList')
    else if (action === 'orderedList') active = editor.isActive('orderedList')
    else if (action === 'blockquote') active = editor.isActive('blockquote')
    else if (action === 'code') active = editor.isActive('code')
    else if (action === 'codeBlock') active = editor.isActive('codeBlock')
    btn.classList.toggle('active', active)
  })
}

toolbar.addEventListener('click', (e) => {
  const btn = e.target.closest('.toolbar-btn')
  if (!btn) return
  const action = btn.dataset.action
  const level = btn.dataset.level
  editor.chain().focus()
  if (action === 'bold') editor.chain().focus().toggleBold().run()
  else if (action === 'italic') editor.chain().focus().toggleItalic().run()
  else if (action === 'strike') editor.chain().focus().toggleStrike().run()
  else if (action === 'heading' && level) editor.chain().focus().toggleHeading({ level: Number(level) }).run()
  else if (action === 'paragraph') editor.chain().focus().setParagraph().run()
  else if (action === 'bulletList') editor.chain().focus().toggleBulletList().run()
  else if (action === 'orderedList') editor.chain().focus().toggleOrderedList().run()
  else if (action === 'blockquote') editor.chain().focus().toggleBlockquote().run()
  else if (action === 'code') editor.chain().focus().toggleCode().run()
  else if (action === 'codeBlock') editor.chain().focus().toggleCodeBlock().run()
  else if (action === 'undo') editor.chain().focus().undo().run()
  else if (action === 'redo') editor.chain().focus().redo().run()
  updateToolbarActiveState()
})

editor.on('selectionUpdate', updateToolbarActiveState)
editor.on('transaction', updateToolbarActiveState)
updateToolbarActiveState()
