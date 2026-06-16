export type Locale = 'zh' | 'en'

export type SiteContent = {
  locale: Locale
  lang: string
  title: string
  description: string
  nav: {
    features: string
    products: string
    download: string
    docs: string
    github: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    ctaDownload: string
    ctaExtension: string
    ctaDocs: string
    note: string
  }
  features: {
    title: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  products: {
    title: string
    subtitle: string
    desktop: {
      title: string
      description: string
      bullets: string[]
      link: string
    }
    extension: {
      title: string
      description: string
      bullets: string[]
      link: string
    }
  }
  download: {
    title: string
    subtitle: string
    primary: string
    secondary: string
    requirements: string
    alpha: string
  }
  footer: {
    license: string
    trademark: string
    community: string
  }
}

export const links = {
  proRepo: 'https://github.com/ladaojeifang/AssetVault_Pro',
  extRepo: 'https://github.com/ladaojeifang/AssetVault_Browser_Extension',
  releases: 'https://github.com/ladaojeifang/AssetVault_Pro/releases',
  helpZh: 'https://github.com/ladaojeifang/AssetVault_Pro/blob/main/doc/help/index.md',
  helpEn: 'https://github.com/ladaojeifang/AssetVault_Pro/blob/main/doc/help/getting-started.md',
  webApi: 'https://github.com/ladaojeifang/AssetVault_Pro/blob/main/doc/web-api-v1-guide.md',
  contributing: 'https://github.com/ladaojeifang/AssetVault_Pro/blob/main/CONTRIBUTING.md',
  security: 'https://github.com/ladaojeifang/AssetVault_Pro/blob/main/SECURITY.md'
} as const
