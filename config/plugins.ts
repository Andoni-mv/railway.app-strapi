export default ({ env }) => {
    const cloudinaryName = env('CLOUDINARY_NAME');
    const cloudinaryKey = env('CLOUDINARY_KEY');
    const cloudinarySecret = env('CLOUDINARY_SECRET');

    const plugins: any = {
        'users-permissions': {
            config: {
                jwtSecret: env('JWT_SECRET'),
            },
        },
    };

    // Solo configurar Cloudinary si todas las variables están definidas
    if (cloudinaryName && cloudinaryKey && cloudinarySecret) {
        plugins.upload = {
            config: {
                provider: 'cloudinary',
                providerOptions: {
                    cloud_name: cloudinaryName,
                    api_key: cloudinaryKey,
                    api_secret: cloudinarySecret,
                },
                actionOptions: {
                    upload: {},
                    uploadStream: {},
                    delete: {},
                },
            },
        };
    }

    return plugins;
};
