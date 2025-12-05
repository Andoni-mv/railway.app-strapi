export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    // Upload configuration removed - using default local provider
    // Files will be stored in public/uploads directory
});
