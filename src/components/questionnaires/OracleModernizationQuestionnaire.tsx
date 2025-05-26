
import React from 'react';
import QuestionnaireBase from '../QuestionnaireBase';

interface OracleModernizationQuestionnaireProps {
  onNavigate: (page: string) => void;
}

const OracleModernizationQuestionnaire: React.FC<OracleModernizationQuestionnaireProps> = ({ onNavigate }) => {
  const content = `This questionnaire is used to collect metrics that help provide an estimate of effort for Oracle database modernization. The target database and tools are assumed to be the current generally available release on Linux®, Unix®, or Windows® platforms.

Customer Information: Please provide your company details and contact information.

Point of Contact Information: Who is the main contact for this modernization project?

General Information: Please provide a brief description of your goals/outcome expected from the database modernization.

What are the time frames for the project?

Database Information: Please provide the following information for each database being migrated.

Target Modernization Database: What is your target database platform?

Application Implementation: How are your applications currently implemented?

List secondary database names, vendors and versions: What other databases are in your environment?

Development/Maintenance/Testing: Please provide any on-going, new, or anticipated development efforts and their corresponding implementation dates.

Documentation: What documentation do you currently have available?

Any additional comments that help to describe your system?

Additional requirements and Considerations: In this section please identify or describe any requirements that are not being met. Also identify or describe any business need, that to date was not implemented due to actual or perceived constraints of the existing environment. For example:
• Requirement X was not delivered because it is not compatible with processes needed to meet other requirements.
• Business Unit Y has to wait to access their ready information because processing for business Unit Z is not complete.
• Aggregations SLA's are not met because processes are waiting for database maintenance (backup, run statistics, etc.) are not complete.
• Business requirements cannot be changed or modified in a timely manner.
• Business requirement solution delivery is too long.`;

  return (
    <QuestionnaireBase
      title="Oracle Modernization Questionnaire"
      content={content}
      onNavigate={onNavigate}
    />
  );
};

export default OracleModernizationQuestionnaire;
