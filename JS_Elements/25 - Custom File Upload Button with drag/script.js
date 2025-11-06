// DOM Elements
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file');
const filePreview = document.getElementById('file-preview');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  dropArea.classList.add('drag-over');
}

function unhighlight() {
  dropArea.classList.remove('drag-over');
}

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);
fileInput.addEventListener('change', handleFiles, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles({ target: { files } });
}

function handleFiles(e) {
  const files = [...e.target.files];
  if (files.length === 0) return;
  
  // Clear preview if needed
  // filePreview.innerHTML = '';
  
  files.forEach(uploadFile);
}

function uploadFile(file) {
  // Here you would typically upload the file to a server
  // For this example, we'll just display a preview
  displayFilePreview(file);
}

function displayFilePreview(file) {
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    
    // Create file preview based on file type
    if (file.type.match('image.*')) {
      const img = document.createElement('img');
      img.src = e.target.result;
      fileItem.appendChild(img);
    } else {
      // For non-image files, show an icon/placeholder
      const docIcon = document.createElement('div');
      docIcon.className = 'file-doc-icon';
      docIcon.textContent = getFileIconText(file.name);
      fileItem.appendChild(docIcon);
    }
    
    // Add file info
    const fileInfo = document.createElement('div');
    fileInfo.className = 'file-info';
    fileInfo.textContent = file.name;
    fileItem.appendChild(fileInfo);
    
    // Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-file';
    removeBtn.textContent = '×';
    removeBtn.addEventListener('click', function() {
      fileItem.remove();
    });
    fileItem.appendChild(removeBtn);
    
    filePreview.appendChild(fileItem);
  };
  
  reader.readAsDataURL(file);
}

function getFileIconText(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  
  const iconMap = {
    'pdf': '📄',
    'doc': '📝',
    'docx': '📝',
    'xls': '📊',
    'xlsx': '📊',
    'ppt': '📑',
    'pptx': '📑',
    'txt': '📄',
    'zip': '📦',
    'rar': '📦'
  };
  
  return iconMap[extension] || '📁';
}