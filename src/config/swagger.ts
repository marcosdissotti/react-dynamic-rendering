import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const swaggerDefinition = {
  openapi: '3.0.2',
  info: {
    title: 'ABQM Server Side Rendering',
    version: '1.0.0',
    description: 'Documentation for ABQM Server Side Rendering',
    contact: {
      name: 'Suporte iClouds',
      url: 'https://www.iclouds.com.br',
      email: 'suporte@iclouds.com.br',
    },
  },
  host: 'localhost:3334',
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: [
    path.resolve(__dirname, '..', 'services/**/*.ts'),
    path.resolve(__dirname, '..', 'services/**/*.js'),
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
