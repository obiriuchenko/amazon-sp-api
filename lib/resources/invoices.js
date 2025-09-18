module.exports = {
  invoices: {
    __versions: ['2024-06-19'],
    __operations: [
      'getInvoicesAttributes',
      'getInvoicesDocument',
      'getInvoicesExports',
      'createInvoicesExport',
      'getInvoicesExport',
      'getInvoices',
      'getInvoice'
    ],
    ...require('./versions/invoices/invoices_2024-06-19')
  }
};
