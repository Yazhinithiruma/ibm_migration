import React from 'react';
import QuestionnaireBase from '../QuestionnaireBase';

interface TeradataMigrationQuestionnaireProps {
  onNavigate: (page: string) => void;
}

const TeradataMigrationQuestionnaire: React.FC<TeradataMigrationQuestionnaireProps> = ({ onNavigate }) => {
  const content = `This questionnaire is used to collect metrics to support an estimation for a Teradata migration initiative. Please return the questionnaire to the sender. Thank you for your response.

Customer Information: Please provide your company details and contact information.

Primary Point of Contact Information: Who is the main contact person for this project?

Point of Contact for Database Information: Who can provide technical database details?

Point of Contact for Application Information: Who can provide application-specific information?

General Information: Please provide a brief description of your goal(s) for migrating from Teradata.

What are the time frames for the project?

Teradata Environment Information: Please provide the following information for each environment being migrated.

Rule of Thumb (ROT) to determine complexity of database objects: How complex are your current database objects?

Section-2: Additional requirements and considerations
In this section please identify or describe any requirements that are not being met. Also identify or describe any business need, that to date was not implemented due to actual or perceived constraints of the existing environment. For example:
• Requirement X was not delivered because it is not compatible with processes needed to meet other requirements.
• Business Unit Y has to wait to access their ready information because processing for business Unit Z is not complete.
• Aggregations SLA's are not met because processes are waiting for database maintenance (backup, runstats, etc) are not complete.
• Business requirements can not be changed or modified in a timely manner.
• Business requirement solution delivery is to long.

Appendix 1. Teradata SQL Query Workload Analysis: Please run the following sample DBQL query to gather information for Teradata Workload Analysis. Please supply the appropriate data ranges for each query that represents the typical SQL workload in your database.`;

  return (
    <QuestionnaireBase
      title="Teradata Migration Questionnaire"
      content={content}
      onNavigate={onNavigate}
    />
  );
};

export default TeradataMigrationQuestionnaire;