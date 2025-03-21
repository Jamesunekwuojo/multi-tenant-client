import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Multi-Tenancy API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};