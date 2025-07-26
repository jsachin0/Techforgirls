import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  college: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    college: ''
  });
  
  const [whatsappClicks, setWhatsappClicks] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  // Check if user has already submitted
  useEffect(() => {
    const hasSubmitted = localStorage.getItem('techforgirls_submitted');
    if (hasSubmitted === 'true') {
      setIsSubmitted(true);
      setIsFormDisabled(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleWhatsAppShare = () => {
    if (whatsappClicks < 5) {
      const message = "Hey Buddy, Join Tech For Girls Community";
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setWhatsappClicks(prev => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (whatsappClicks < 5) {
      alert('Please complete the WhatsApp sharing (5 clicks required) before submitting.');
      return;
    }

    if (!uploadedFile) {
      alert('Please upload a screenshot/resume before submitting.');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form Data:', formData);
    console.log('Uploaded File:', uploadedFile);
    console.log('WhatsApp Clicks:', whatsappClicks);

    // Mark as submitted and save to localStorage
    setIsSubmitted(true);
    setIsFormDisabled(true);
    localStorage.setItem('techforgirls_submitted', 'true');
  };

  const colleges = [
    'Computer Science',
    'Information Technology',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Biotechnology',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="registration-container">
        <div className="success-message">
          <h2>🎉 Your submission has been recorded!</h2>
          <p>Thanks for being part of Tech for Girls!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-container">
      <div className="form-header">
        <h1>Tech for Girls</h1>
        <p>Join our community and empower women in technology</p>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-section">
          <h2>Basic Details</h2>
          
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isFormDisabled}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={isFormDisabled}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isFormDisabled}
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="college">College/Department *</label>
            <select
              id="college"
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              required
              disabled={isFormDisabled}
            >
              <option value="">Select your department</option>
              {colleges.map(college => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Share on WhatsApp</h2>
          <div className="whatsapp-section">
            <button
              type="button"
              onClick={handleWhatsAppShare}
              disabled={whatsappClicks >= 5 || isFormDisabled}
              className={`whatsapp-button ${whatsappClicks >= 5 ? 'completed' : ''}`}
            >
              {whatsappClicks >= 5 ? '✅ Shared Successfully' : '📱 Share on WhatsApp'}
            </button>
            <div className="click-counter">
              Click count: {whatsappClicks}/5
            </div>
            {whatsappClicks >= 5 && (
              <div className="completion-message">
                Sharing complete. Please continue.
              </div>
            )}
          </div>
        </div>

        <div className="form-section">
          <h2>Upload Screenshot/Resume</h2>
          <div className="form-group">
            <label htmlFor="file-upload">Upload File *</label>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileUpload}
              accept="image/*,.pdf,.doc,.docx"
              disabled={isFormDisabled}
              required
            />
            {uploadedFile && (
              <div className="file-info">
                ✅ {uploadedFile.name} uploaded
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isFormDisabled || whatsappClicks < 5 || !uploadedFile}
          className="submit-button"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm; 