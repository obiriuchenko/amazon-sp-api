module.exports = {
  aplusContent: {
    __versions: ['2020-11-01'],
    __operations: [
      'searchContentDocuments',
      'createContentDocument',
      'getContentDocument',
      'updateContentDocument',
      'listContentDocumentAsinRelations',
      'postContentDocumentAsinRelations',
      'validateContentDocumentAsinRelations',
      'searchContentPublishRecords',
      'postContentDocumentApprovalSubmission',
      'postContentDocumentSuspendSubmission'
    ],
    ...require('./versions/aplus_content/aplusContent_2020-11-01')
  }
};
