import React, { useState } from 'react';
import { Container, Form, Button, Header, Segment, Message, Icon } from 'semantic-ui-react';
import './NewPostPage.css';

const NewPostPage = () => {
  const [postType, setPostType] = useState('question');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: ''
  });
  const [errors, setErrors] = useState({});

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
    setFormData({ title: '', description: '', tags: '' });
    setErrors({});
  };

  const handleInputChange = (e, { name, value }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
    
    if (!formData.tags.trim()) {
      newErrors.tags = 'Tags are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        console.log('Form submitted:', { postType, ...formData });
        alert('Post submitted successfully! (Note: Data is not saved to database in this version)');
        setFormData({ title: '', description: '', tags: '' });
      } catch (error) {
        console.error('Error submitting post:', error);
        alert('Error submitting post. Please try again.');
      }
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
                rows={6}
                icon="edit"
              />
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
            <Button type="submit" primary size="large">
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
