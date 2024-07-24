/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheMaxMemorySize: 0,
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'site.themed.ro',
                port:'',
                pathname:'/uploads/images/**',
            },
            {
                protocol: 'https',
                hostname: 'site.themed.ro',
                port:'',
                pathname:'/images/**',
            },
            {
                protocol: 'https',
                hostname: 'newsite.themed.ro',
                port:'',
                
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port:'',

            },
            {
                hostname:'images.unsplash.com',
            },
            {
                hostname:'dev.themed.ro',
            }
        ]
    }
};

export default nextConfig;
