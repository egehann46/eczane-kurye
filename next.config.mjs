/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Üretim build'i sırasında ESLint hatalarını görmezden gel
    ignoreDuringBuilds: true,
  },
}

export default nextConfig 