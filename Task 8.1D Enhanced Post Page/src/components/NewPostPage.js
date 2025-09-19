import React, { useState } from 'react';
import { Container, Form, Button, Header, Segment, Message, Icon, Image } from 'semantic-ui-react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { storage, db } from '../firebase/config';
import './NewPostPage.css';

const NewPostPage = () => {
  const [postType, setPostType] = useState('article');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    articleText: '',
    tags: '',
    imageUrl: ''
  });
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
    setFormData({ title: '', description: '', articleText: '', tags: '', imageUrl: '' });
    setErrors({});
    setSelectedFile(null);
    setPreviewUrl('');
  };

  const handleInputChange = (e, { name, value }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelImage = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    // Reset the file input
    const fileInput = document.getElementById('image-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const uploadImage = async (file) => {
    try {
      const imageRef = ref(storage, `images/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = postType === 'question' ? 'Problem description is required' : 'Abstract is required';
    }
    
    if (postType === 'article' && !formData.articleText.trim()) {
      newErrors.articleText = 'Article text is required';
    }
    
    if (!formData.tags.trim()) {
      newErrors.tags = 'Tags are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setUploading(true);
    
    try {
      let imageUrl = '';
      
      // Upload image if selected
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      // Prepare post data
      const postData = {
        type: postType,
        title: formData.title,
        description: formData.description,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        imageUrl: imageUrl,
        createdAt: serverTimestamp(),
        ...(postType === 'article' && { articleText: formData.articleText })
      };

      // Save to Firestore
      await addDoc(collection(db, 'posts'), postData);
      
      console.log('Post submitted successfully:', postData);
      alert('Post submitted successfully!');
      
      // Reset form
      setFormData({ title: '', description: '', articleText: '', tags: '', imageUrl: '' });
      setSelectedFile(null);
      setPreviewUrl('');
      
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Error submitting post. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const getDescriptionLabel = () => {
    return postType === 'question' ? 'Describe your problem' : 'Abstract';
  };

  const getDescriptionPlaceholder = () => {
    return postType === 'question' 
      ? 'Describe your problem in detail...' 
      : 'Enter a 1-paragraph abstract';
  };

  const getTitlePlaceholder = () => {
    return postType === 'question' 
      ? 'Start your question with how, what, why, etc.' 
      : 'Enter a descriptive title';
  };

  const getTagsPlaceholder = () => {
    return postType === 'question' 
      ? 'Please add up to 3 tags to describe what your question is about e.g., Java' 
      : 'Please add up to 3 tags to describe what your article is about e.g., Java';
  };

  return (
    <Container className="new-post-container">
      <div className="page-header">
        <Header as="h1" className="page-title">
          <Icon name="edit" className="title-icon" />
          New Post
        </Header>
        <p className="course-title">
          <Icon name="graduation cap" />
          SIT313 - Full-Stack Development: Secure Frontend Applications
        </p>
      </div>

      <Form onSubmit={handleSubmit} className="post-form">
        <Segment className="form-segment">
          <Header as="h3" className="section-header">
            <Icon name="list" />
            Select Post Type:
          </Header>
          <Form.Group className="post-type-group">
            <Form.Radio
              label={
                <div className="radio-label">
                  <Icon name="question circle" color="blue" />
                  Question
                </div>
              }
              name="postType"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            <Form.Radio
              label={
                <div className="radio-label">
                  <Icon name="file text" color="green" />
                  Article
                </div>
              }
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
          </Form.Group>
        </Segment>

        <Segment className="form-segment">
          <Header as="h3" className="section-header">
            <Icon name="lightbulb" />
            What do you want to ask or share
          </Header>
          <div className="section-description">
            <Icon name="info circle" />
            This section is designed based on the type of the post. It could be developed by conditional rendering. 
            {postType === 'question' ? (
              <span className="conditional-text">
                <Icon name="arrow right" />
                For post a question, the following section would be appeared.
              </span>
            ) : (
              <span className="conditional-text">
                <Icon name="arrow right" />
                For post an article, the following section would be appeared.
              </span>
            )}
          </div>

          <Form.Field>
            <label>
              <Icon name="header" />
              Title
            </label>
            <Form.Input
              name="title"
              placeholder={getTitlePlaceholder()}
              value={formData.title}
              onChange={handleInputChange}
              error={!!errors.title}
              icon="pencil"
              iconPosition="left"
            />
            {errors.title && (
              <Message negative size="tiny">
                <Icon name="warning circle" />
                {errors.title}
              </Message>
            )}
          </Form.Field>

          <Form.Field>
            <label>
              <Icon name="image" />
              Add an image:
            </label>
            <div className="image-upload-section">
              <div className="image-input-group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="file-input"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="file-input-label">
                  <Icon name="folder open" />
                  Browse
                </label>
                <Button 
                  type="button" 
                  className="upload-button"
                  disabled={!selectedFile || uploading}
                  loading={uploading}
                >
                  <Icon name="upload" />
                  Upload
                </Button>
                {selectedFile && (
                  <Button 
                    type="button" 
                    className="cancel-button"
                    onClick={handleCancelImage}
                    disabled={uploading}
                  >
                    <Icon name="times" />
                    Cancel
                  </Button>
                )}
              </div>
              {previewUrl && (
                <div className="image-preview">
                  <Image src={previewUrl} size="small" rounded />
                  <p className="preview-text">Image preview</p>
                  <Button 
                    type="button" 
                    className="remove-image-button"
                    onClick={handleCancelImage}
                    disabled={uploading}
                    size="mini"
                  >
                    <Icon name="trash" />
                    Remove Image
                  </Button>
                </div>
              )}
            </div>
          </Form.Field>

          <Form.Field>
            <label>
              <Icon name={postType === 'question' ? 'help' : 'file text'} />
              {getDescriptionLabel()}
            </label>
            <Form.TextArea
              name="description"
              placeholder={getDescriptionPlaceholder()}
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              error={!!errors.description}
            />
            {errors.description && (
              <Message negative size="tiny">
                <Icon name="warning circle" />
                {errors.description}
              </Message>
            )}
          </Form.Field>

          {postType === 'article' && (
            <Form.Field>
              <label>
                <Icon name="file alternate" />
                Article Text
              </label>
              <Form.TextArea
                name="articleText"
                placeholder="Enter your article content..."
                value={formData.articleText}
                onChange={handleInputChange}
                rows={6}
                error={!!errors.articleText}
              />
              {errors.articleText && (
                <Message negative size="tiny">
                  <Icon name="warning circle" />
                  {errors.articleText}
                </Message>
              )}
            </Form.Field>
          )}

          <Form.Field>
            <label>
              <Icon name="tags" />
              Tags
            </label>
            <Form.Input
              name="tags"
              placeholder={getTagsPlaceholder()}
              value={formData.tags}
              onChange={handleInputChange}
              error={!!errors.tags}
              icon="tag"
              iconPosition="left"
            />
            {errors.tags && (
              <Message negative size="tiny">
                <Icon name="warning circle" />
                {errors.tags}
              </Message>
            )}
          </Form.Field>

          <div className="form-actions">
            <Button type="submit" primary size="large" loading={uploading} disabled={uploading}>
              <Icon name="send" />
              Post
            </Button>
          </div>
        </Segment>
      </Form>
    </Container>
  );
};

export default NewPostPage;
