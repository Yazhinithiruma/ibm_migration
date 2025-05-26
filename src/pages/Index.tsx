
import React, { useState } from 'react';
import DashboardNav from '../components/DashboardNav';
import HomePage from '../components/HomePage';
import DatabaseMigration from '../components/DatabaseMigration';
import DataStageMigration from '../components/DataStageMigration';
import SidebarNav from '../components/SidebarNav';
import Footer from '../components/Footer';
import TeradataMigrationQuestionnaire from '../components/questionnaires/TeradataMigrationQuestionnaire';
import HadoopModernizationQuestionnaire from '../components/questionnaires/HadoopModernizationQuestionnaire';
import OracleModernizationQuestionnaire from '../components/questionnaires/OracleModernizationQuestionnaire';
import QReplicationHealthCheckQuestionnaire from '../components/questionnaires/QReplicationHealthCheckQuestionnaire';
import IBMDataReplicationQuestionnaire from '../components/questionnaires/IBMDataReplicationQuestionnaire';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'database-migration':
        return <DatabaseMigration />;
      case 'datastage-migration':
        return <DataStageMigration />;
      case 'questionnaire-teradata-migration':
        return <TeradataMigrationQuestionnaire onNavigate={setCurrentPage} />;
      case 'questionnaire-hadoop-modernization':
        return <HadoopModernizationQuestionnaire onNavigate={setCurrentPage} />;
      case 'questionnaire-oracle-modernization':
        return <OracleModernizationQuestionnaire onNavigate={setCurrentPage} />;
      case 'questionnaire-q-replication-health':
        return <QReplicationHealthCheckQuestionnaire onNavigate={setCurrentPage} />;
      case 'questionnaire-ibm-data-replication':
        return <IBMDataReplicationQuestionnaire onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <DashboardNav 
        onNavigate={setCurrentPage} 
        currentPage={currentPage}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <SidebarNav 
          onNavigate={setCurrentPage}
          currentPage={currentPage}
        />
        <main style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
          {renderCurrentPage()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
