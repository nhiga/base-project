module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '^components/(.*)': '<rootDir>/web/components/$1',
    '^utils/(.*)': '<rootDir>/utils/$1'
  },
  preset: 'ts-jest'
};
