import React from 'react'
import {
  siPython,
  siApachegroovy,
  siLinux,
  siPostgresql,
  siMysql,
  siPandas,
  siNumpy,
  siApache,
} from 'simple-icons'
import {
  Terminal,
  Database,
  Webhook,
  Bot,
  Layers,
  Network,
  BarChart2,
  Mail,
  ShieldCheck,
  FileSpreadsheet,
  Workflow,
  Zap,
  Shuffle,
  CloudCog,
  ServerCog,
  Route,
  Gauge,
  ClipboardList,
  Scale,
  FlaskConical,
  Users,
  FileText,
  BarChart3,
  TrendingUp,
  Target,
} from 'lucide-react'
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export type IconSourceType = 'simple-icons' | 'lucide'

export interface SkillIconDescriptor {
  type: IconSourceType
  slug?: string
  title?: string
  hex?: string
  contrastRule?: 'brand-both' | 'theme-light-brand-dark' | 'brand-light-theme-dark'
  lucideName?: string
  lucideIcon?: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
}

export const SKILL_ICON_MAP: Record<string, SkillIconDescriptor> = {
  // Brand logos from simple-icons
  Python: {
    type: 'simple-icons',
    slug: siPython.slug,
    title: siPython.title,
    hex: siPython.hex,
    contrastRule: 'brand-both',
  },
  Groovy: {
    type: 'simple-icons',
    slug: siApachegroovy.slug,
    title: siApachegroovy.title,
    hex: siApachegroovy.hex,
    contrastRule: 'brand-both',
  },
  'Unix/Linux': {
    type: 'simple-icons',
    slug: siLinux.slug,
    title: siLinux.title,
    hex: siLinux.hex,
    // Contrast: #FCC624 is 1.59:1 on white (fails <3:1), 12.55:1 on dark
    contrastRule: 'theme-light-brand-dark',
  },
  PostgreSQL: {
    type: 'simple-icons',
    slug: siPostgresql.slug,
    title: siPostgresql.title,
    hex: siPostgresql.hex,
    contrastRule: 'brand-both',
  },
  MySQL: {
    type: 'simple-icons',
    slug: siMysql.slug,
    title: siMysql.title,
    hex: siMysql.hex,
    contrastRule: 'brand-both',
  },
  Pandas: {
    type: 'simple-icons',
    slug: siPandas.slug,
    title: siPandas.title,
    hex: siPandas.hex,
    // Contrast: #150458 is 17.64:1 on white, 1.13:1 on dark (fails <3:1)
    contrastRule: 'brand-light-theme-dark',
  },
  NumPy: {
    type: 'simple-icons',
    slug: siNumpy.slug,
    title: siNumpy.title,
    hex: siNumpy.hex,
    // Contrast: #013243 is 13.65:1 on white, 1.46:1 on dark (fails <3:1)
    contrastRule: 'brand-light-theme-dark',
  },
  'Apache POI': {
    // Apache POI uses the Apache logo per spec
    type: 'simple-icons',
    slug: siApache.slug,
    title: siApache.title,
    hex: siApache.hex,
    contrastRule: 'brand-both',
  },

  // Generic Lucide glyphs (non-brand, emerald accent)
  PowerShell: {
    type: 'lucide',
    lucideName: 'terminal',
    lucideIcon: Terminal,
  },
  SQL: {
    type: 'lucide',
    lucideName: 'database',
    lucideIcon: Database,
  },
  'REST APIs': {
    type: 'lucide',
    lucideName: 'webhook',
    lucideIcon: Webhook,
  },
  'REST API': {
    type: 'lucide',
    lucideName: 'webhook',
    lucideIcon: Webhook,
  },
  IGNIO: {
    type: 'lucide',
    lucideName: 'bot',
    lucideIcon: Bot,
  },
  ServiceNow: {
    type: 'lucide',
    lucideName: 'layers',
    lucideIcon: Layers,
  },
  'Active Directory': {
    type: 'lucide',
    lucideName: 'network',
    lucideIcon: Network,
  },
  'Power BI': {
    type: 'lucide',
    lucideName: 'bar-chart-2',
    lucideIcon: BarChart2,
  },
  'Exchange Online': {
    type: 'lucide',
    lucideName: 'mail',
    lucideIcon: Mail,
  },
  'NetIQ IDM': {
    type: 'lucide',
    lucideName: 'shield-check',
    lucideIcon: ShieldCheck,
  },
  'VBA Macros': {
    type: 'lucide',
    lucideName: 'file-spreadsheet',
    lucideIcon: FileSpreadsheet,
  },
  'Workflow Automation': {
    type: 'lucide',
    lucideName: 'workflow',
    lucideIcon: Workflow,
  },
  'Workflow Design': {
    type: 'lucide',
    lucideName: 'workflow',
    lucideIcon: Workflow,
  },
  'Power Automate': {
    type: 'lucide',
    lucideName: 'zap',
    lucideIcon: Zap,
  },
  'ETL Automation': {
    type: 'lucide',
    lucideName: 'shuffle',
    lucideIcon: Shuffle,
  },
  ETL: {
    type: 'lucide',
    lucideName: 'shuffle',
    lucideIcon: Shuffle,
  },
  'Cloud Automation': {
    type: 'lucide',
    lucideName: 'cloud-cog',
    lucideIcon: CloudCog,
  },
  'Database Management': {
    type: 'lucide',
    lucideName: 'database',
    lucideIcon: Database,
  },
  'API Integration': {
    type: 'lucide',
    lucideName: 'webhook',
    lucideIcon: Webhook,
  },
  'System Orchestration': {
    type: 'lucide',
    lucideName: 'server-cog',
    lucideIcon: ServerCog,
  },
  'Business Process Mapping': {
    type: 'lucide',
    lucideName: 'route',
    lucideIcon: Route,
  },
  'Process Optimization': {
    type: 'lucide',
    lucideName: 'gauge',
    lucideIcon: Gauge,
  },
  'Requirement Gathering': {
    type: 'lucide',
    lucideName: 'clipboard-list',
    lucideIcon: ClipboardList,
  },
  'Fit-Gap Analysis': {
    type: 'lucide',
    lucideName: 'scale',
    lucideIcon: Scale,
  },
  'UAT Testing': {
    type: 'lucide',
    lucideName: 'flask-conical',
    lucideIcon: FlaskConical,
  },
  'Stakeholder Management': {
    type: 'lucide',
    lucideName: 'users',
    lucideIcon: Users,
  },
  Documentation: {
    type: 'lucide',
    lucideName: 'file-text',
    lucideIcon: FileText,
  },
  Tableau: {
    type: 'lucide',
    lucideName: 'bar-chart-3',
    lucideIcon: BarChart3,
  },
  'Data Modeling': {
    type: 'lucide',
    lucideName: 'database',
    lucideIcon: Database,
  },
  'Predictive Analytics': {
    type: 'lucide',
    lucideName: 'trending-up',
    lucideIcon: TrendingUp,
  },
  'KPI Tracking': {
    type: 'lucide',
    lucideName: 'target',
    lucideIcon: Target,
  },
}

const SI_PATHS: Record<string, string> = {
  python: siPython.path,
  apachegroovy: siApachegroovy.path,
  linux: siLinux.path,
  postgresql: siPostgresql.path,
  mysql: siMysql.path,
  pandas: siPandas.path,
  numpy: siNumpy.path,
  apache: siApache.path,
}

export function SkillIcon({
  name,
  size = 16,
  className,
}: {
  name: string
  size?: number
  className?: string
}) {
  const descriptor = SKILL_ICON_MAP[name]

  if (!descriptor) {
    return null
  }

  if (descriptor.type === 'simple-icons' && descriptor.slug) {
    const path = SI_PATHS[descriptor.slug]
    if (!path) return null

    let colorClass = ''
    let inlineStyle: React.CSSProperties | undefined = undefined

    if (descriptor.contrastRule === 'theme-light-brand-dark') {
      // Light mode: theme text; Dark mode: brand yellow #FCC624
      colorClass = 'text-foreground dark:text-[#FCC624] fill-current'
    } else if (descriptor.contrastRule === 'brand-light-theme-dark') {
      // Light mode: brand color; Dark mode: theme text
      if (descriptor.hex) {
        colorClass = `text-[#${descriptor.hex}] dark:text-foreground fill-current`
      } else {
        colorClass = 'fill-current'
      }
    } else {
      // Brand color in both themes
      inlineStyle = { fill: `#${descriptor.hex}` }
    }

    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn('shrink-0 inline-block align-middle', colorClass, className)}
        style={inlineStyle}
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    )
  }

  if (descriptor.type === 'lucide' && descriptor.lucideIcon) {
    const LucideIcon = descriptor.lucideIcon
    return (
      <LucideIcon
        size={size}
        className={cn('shrink-0 inline-block align-middle text-primary', className)}
        aria-hidden="true"
      />
    )
  }

  return null
}
