module.exports = {
    'carshop-file':{
        mode: 'split',
        input: './Talflow-carshop-1.0-resolved.json',
        output: {
            target: './src/api/carshop.ts',
            schemas: 'src/api/model',
            client: 'react-query',
            mock: true,
        }
    },
};