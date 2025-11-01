import React from 'react';

const ResumeDownload: React.FC = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/Tino_Kay_Resume.pdf');
      if (!response.ok) throw new Error('File not found');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Tino_Kay_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Resume not found. Please try again later.');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
    >
      📄 Download Resume
    </button>
  );
};

export default ResumeDownload;
