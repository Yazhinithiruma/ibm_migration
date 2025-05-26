
import React, { useState } from 'react';
import { Grid, Column, Button, TextArea, Tile } from '@carbon/react';

interface QuestionnaireBaseProps {
  title: string;
  content: string;
  onNavigate: (page: string) => void;
}

const QuestionnaireBase: React.FC<QuestionnaireBaseProps> = ({ title, content, onNavigate }) => {
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleResponseChange = (section: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Questionnaire Responses:', responses);
    alert('Questionnaire responses saved successfully!');
  };

  const formatContent = (content: string) => {
    const sections = content.split('\n\n').filter(section => section.trim());
    return sections.map((section, index) => {
      if (section.includes(':') && !section.includes('Customer Information')) {
        const [question, ...rest] = section.split(':');
        return (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h4 className="cds--productive-heading-03" style={{ marginBottom: '1rem' }}>
              {question.trim()}:
            </h4>
            {rest.length > 0 && (
              <p className="cds--body-long-01" style={{ marginBottom: '1rem', color: '#525252' }}>
                {rest.join(':').trim()}
              </p>
            )}
            <TextArea
              id={`response-${index}`}
              labelText="Your Response"
              placeholder="Enter your response here..."
              rows={4}
              value={responses[`section-${index}`] || ''}
              onChange={(e) => handleResponseChange(`section-${index}`, e.target.value)}
            />
          </div>
        );
      }
      return (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--body-long-01" style={{ color: '#525252' }}>
            {section}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="cds--content" style={{ padding: '6rem 2rem 2rem' }}>
      <Grid className="cds--grid--full-width">
        <Column lg={16} md={8} sm={4}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Button
              kind="ghost"
              onClick={() => onNavigate('home')}
              style={{ marginBottom: '2rem' }}
            >
              ← Back to Home
            </Button>
            
            <h1 className="cds--productive-heading-06" style={{ marginBottom: '1rem' }}>
              {title}
            </h1>
            
            <Tile style={{ padding: '2rem', marginBottom: '2rem', backgroundColor: 'white' }}>
              {formatContent(content)}
              
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Button
                  kind="primary"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Submit Questionnaire
                </Button>
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

export default QuestionnaireBase;
