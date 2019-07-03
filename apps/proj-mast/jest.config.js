module.exports = {
  name: 'proj-mast',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/proj-mast',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
