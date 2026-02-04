import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export function SEO({
    title,
    description,
    keywords = "Ikigai Soul Wellness, Canberra wellness, energy healing, reiki, ayurveda, holistic health, meditation, stress relief",
    image = "/Ikigai logo.png",
    url = "https://ikigaisoulwellness.com.au", // Replace with actual production URL if known, or dynamic
    type = 'website'
}: SEOProps) {

    const siteTitle = "Ikigai Soul Wellness";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

    // Ensure absolute URL for images if not already
    const fullImage = image.startsWith('http') ? image : `${url}${image}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
}
