import type { SiteContent } from './types'
import { links } from './types'

const zh: SiteContent = {
  locale: 'zh',
  lang: 'zh-CN',
  title: 'AssetVault — 本地数字资产管理',
  description:
    'AssetVault Pro 是开源本地 DAM 桌面应用，配合浏览器扩展可从网页一键采集媒体入库。数据留在本机，支持 150+ 格式与 Web API 自动化。',
  nav: {
    features: '功能',
    products: '产品',
    download: '下载',
    docs: '文档',
    github: 'GitHub'
  },
  hero: {
    badge: 'Community Edition · MIT · V0.5 Alpha',
    title: '本地数字资产管理，\n从收藏到检索一站完成',
    subtitle:
      'AssetVault Pro 管理图片、视频、音频、字体、3D 与设计稿；浏览器扩展通过本机 Web API 将网页媒体直接导入资料库。数据默认留在你的电脑上。',
    ctaDownload: '下载桌面端',
    ctaExtension: '浏览器扩展',
    ctaDocs: '帮助文档',
    note: '需先安装并启动 AssetVault Pro，再在设置中启用 Web API（默认 127.0.0.1:41596）。'
  },
  features: {
    title: '为创作工作流设计',
    subtitle: '本地优先、高性能浏览、与浏览器深度集成',
    items: [
      {
        title: '本地资料库',
        description: 'SQLite 本地存储，默认无需联网。支持 archive / catalog / embedded 多种资料库形态。'
      },
      {
        title: '150+ 格式',
        description: '图片、视频、音频、字体、3D、设计稿、文档与代码等，统一预览与缩略图管线。'
      },
      {
        title: '智能搜索与标签',
        description: '索引文本搜索与多维筛选；自定义颜色标签与最多 5 层文件夹嵌套。'
      },
      {
        title: '10 万+ 资产流畅浏览',
        description: '虚拟滚动与缩略图缓存，大型资料库依然顺滑。'
      },
      {
        title: 'Web API v1',
        description: '应用运行时提供本地 HTTP API，支持脚本、扩展与自动化集成。'
      },
      {
        title: '网页一键入库',
        description: '扩展支持右键保存、拖拽、批量采集、整页长截图与视频页导入，覆盖 50+ 站点高清规则。'
      }
    ]
  },
  products: {
    title: '两个开源仓库，一套工作流',
    subtitle: '桌面端负责存储与预览，扩展负责从网页采集',
    desktop: {
      title: 'AssetVault Pro',
      description: 'Electron + React 跨平台桌面 DAM（社区版）。',
      bullets: [
        '拖拽导入、预览、搜索、标签与文件夹',
        'EXR / 3D / 字体 / Markdown 等高级预览',
        'GitHub Releases 安装包（Windows / macOS / Linux）'
      ],
      link: links.proRepo
    },
    extension: {
      title: 'Browser Extension',
      description: 'Chrome / Edge MV3 扩展，与本机 Web API 通信。',
      bullets: [
        '右键菜单、拖拽投放区、批量采集页',
        'YouTube、Bilibili、X 等站点视频/GIF 深度采集',
        '开发者模式加载 dist 或 release zip'
      ],
      link: links.extRepo
    }
  },
  download: {
    title: '开始使用',
    subtitle: '从 GitHub Releases 获取最新安装包',
    primary: '下载 AssetVault Pro',
    secondary: '查看扩展仓库',
    requirements: 'Windows 10/11（主要目标）· macOS · Linux · Node 18+ 仅开发构建需要',
    alpha: '当前为 V0.5 Alpha：API 与磁盘格式可能在版本间变更，升级前请备份资料库。'
  },
  footer: {
    license: '社区版以 MIT 许可开源',
    trademark: '商业版与团队功能规划中，不包含在本仓库',
    community: '欢迎贡献代码与反馈 Issue'
  }
}

const en: SiteContent = {
  locale: 'en',
  lang: 'en',
  title: 'AssetVault — Local Digital Asset Management',
  description:
    'AssetVault Pro is an open-source local DAM desktop app. Pair it with the browser extension to import web media via a local Web API. Your data stays on your machine.',
  nav: {
    features: 'Features',
    products: 'Products',
    download: 'Download',
    docs: 'Docs',
    github: 'GitHub'
  },
  hero: {
    badge: 'Community Edition · MIT · V0.5 Alpha',
    title: 'Local digital asset management\nfrom capture to search',
    subtitle:
      'AssetVault Pro organizes images, video, audio, fonts, 3D, and design files. The browser extension imports web media through a local Web API while the desktop app downloads and ingests assets.',
    ctaDownload: 'Download desktop app',
    ctaExtension: 'Browser extension',
    ctaDocs: 'Documentation',
    note: 'Install and run AssetVault Pro first, then enable Web API in Settings (default 127.0.0.1:41596).'
  },
  features: {
    title: 'Built for creative workflows',
    subtitle: 'Local-first storage, fast browsing, deep browser integration',
    items: [
      {
        title: 'Local libraries',
        description: 'SQLite on disk, offline by default. Supports archive, catalog, and embedded library layouts.'
      },
      {
        title: '150+ formats',
        description: 'Images, video, audio, fonts, 3D, design files, documents, and code — unified preview and thumbnails.'
      },
      {
        title: 'Search & tags',
        description: 'Indexed text search with multi-dimensional filters, color tags, and folders up to 5 levels deep.'
      },
      {
        title: '100K+ assets, smooth UI',
        description: 'Virtual scrolling and thumbnail caching keep large libraries responsive.'
      },
      {
        title: 'Web API v1',
        description: 'Local HTTP API while the app is running — for scripts, extensions, and automation.'
      },
      {
        title: 'One-click web import',
        description: 'Extension: context menu, drag-drop, batch collect, full-page capture, video import, 50+ HD URL rules.'
      }
    ]
  },
  products: {
    title: 'Two repos, one workflow',
    subtitle: 'Desktop stores and previews; extension collects from the web',
    desktop: {
      title: 'AssetVault Pro',
      description: 'Cross-platform Electron + React DAM (Community Edition).',
      bullets: [
        'Import, preview, search, tags, and folders',
        'Advanced preview: EXR, 3D, fonts, Markdown, and more',
        'Installers on GitHub Releases (Windows / macOS / Linux)'
      ],
      link: links.proRepo
    },
    extension: {
      title: 'Browser Extension',
      description: 'Chrome / Edge MV3 extension talking to the local Web API.',
      bullets: [
        'Context menu, drop zone, batch collection page',
        'Deep video/GIF collect for YouTube, Bilibili, X, and more',
        'Load unpacked from dist/ or install from release zip'
      ],
      link: links.extRepo
    }
  },
  download: {
    title: 'Get started',
    subtitle: 'Pick up the latest build from GitHub Releases',
    primary: 'Download AssetVault Pro',
    secondary: 'Extension repository',
    requirements: 'Windows 10/11 (primary) · macOS · Linux · Node 18+ only for building from source',
    alpha: 'V0.5 Alpha: APIs and on-disk formats may change between releases. Back up libraries before upgrading.'
  },
  footer: {
    license: 'Community Edition is open source under MIT',
    trademark: 'Commercial / team features are planned and not in this repo',
    community: 'Contributions and issues welcome'
  }
}

export function getContent(locale: 'zh' | 'en'): SiteContent {
  return locale === 'en' ? en : zh
}

export { links }
