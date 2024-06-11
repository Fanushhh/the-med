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
            },
            {
                protocol: 'https',
                hostname: 'newsite.themed.ro',
                port:'',
                pathname:'/uploads/**',
            }
        ]
    }
};

export default nextConfig;
