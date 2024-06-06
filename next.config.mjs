/** @type {import('next').NextConfig} */
const nextConfig = {

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
            }
        ]
    }
};

export default nextConfig;
