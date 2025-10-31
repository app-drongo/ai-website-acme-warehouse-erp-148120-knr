'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, CheckCircle2, Star, Package, Scan, Radio, BarChart3 } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_SERVICES_LIST_DESCRIPTIONS = {
  badge: 'ERP Solutions',
  mainTitle: 'Complete Warehouse Management',
  mainTitleHighlight: 'Built for Modern Operations',
  mainDescription:
    'Streamline your warehouse operations with our comprehensive ERP system featuring advanced inventory tracking, barcode scanning, and RFID technology',
  service1Title: 'Inventory Management System',
  service1Description: 'Real-time inventory tracking with automated stock level monitoring',
  service1LongDescription:
    'Our advanced inventory management system provides complete visibility into your stock levels, locations, and movements. Automated reorder points and low-stock alerts ensure you never run out of critical items while minimizing carrying costs.',
  service1Badge: 'Core Module',
  service1Pricing: 'Starting at $299/month',
  service1Timeline: '2-3 weeks implementation',
  service1CTA: 'Start Free Trial',
  service1CTAHref: '/',
  service2Title: 'Barcode Scanning Integration',
  service2Description: 'Eliminate manual data entry with enterprise-grade barcode scanning',
  service2LongDescription:
    'Seamlessly integrate barcode scanning throughout your warehouse operations. From receiving to picking to shipping, our system supports all major barcode formats and mobile scanning devices for maximum accuracy and efficiency.',
  service2Pricing: 'Add-on from $99/month',
  service2Timeline: '1-2 weeks setup',
  service2CTA: 'Learn More',
  service2CTAHref: '/',
  service3Title: 'RFID Asset Tracking',
  service3Description: 'Next-generation tracking with passive and active RFID technology',
  service3LongDescription:
    'Deploy RFID technology for hands-free inventory tracking and asset management. Our system supports both passive and active RFID tags, enabling real-time location tracking and automated inventory counts.',
  service3Pricing: 'Enterprise pricing available',
  service3Timeline: '3-4 weeks deployment',
  service3CTA: 'Request Demo',
  service3CTAHref: '/',
  service4Title: 'Analytics & Reporting',
  service4Description: 'Data-driven insights for optimized warehouse performance',
  service4LongDescription:
    'Transform your warehouse data into actionable insights with our comprehensive analytics suite. Track KPIs, identify bottlenecks, and optimize operations with customizable dashboards and automated reports.',
  service4Badge: 'Popular',
  service4Pricing: 'Included in all plans',
  service4Timeline: 'Available immediately',
  service4CTA: 'View Reports',
  service4CTAHref: '/',
  bottomTitle: 'Ready to Transform Your Warehouse?',
  bottomDescription:
    'Join over 500+ businesses that have streamlined their operations with Acme Warehouse ERP. Get started with a personalized demo today.',
  bottomCTA: 'Schedule Demo',
  bottomCTAHref: '/',
} as const;

type ServicesListDescriptionsProps = Partial<typeof DEFAULT_SERVICES_LIST_DESCRIPTIONS>;

export default function Services(props: ServicesListDescriptionsProps) {
  const config = { ...DEFAULT_SERVICES_LIST_DESCRIPTIONS, ...props };
  const navigate = useSmartNavigation();

  const services = [
    {
      id: 'inventory-management',
      title: config.service1Title,
      description: config.service1Description,
      longDescription: config.service1LongDescription,
      icon: Package,
      benefits: [
        'Real-time stock level monitoring',
        'Automated reorder point alerts',
        'Multi-location inventory tracking',
        'Cycle counting optimization',
      ],
      pricing: config.service1Pricing,
      timeline: config.service1Timeline,
      featured: true,
      badge: config.service1Badge,
      cta: config.service1CTA,
      ctaHref: config.service1CTAHref,
    },
    {
      id: 'barcode-scanning',
      title: config.service2Title,
      description: config.service2Description,
      longDescription: config.service2LongDescription,
      icon: Scan,
      benefits: [
        'Support for all major barcode formats',
        'Mobile device compatibility',
        'Batch scanning capabilities',
        '99.9% scanning accuracy',
      ],
      pricing: config.service2Pricing,
      timeline: config.service2Timeline,
      featured: false,
      badge: null,
      cta: config.service2CTA,
      ctaHref: config.service2CTAHref,
    },
    {
      id: 'rfid-tracking',
      title: config.service3Title,
      description: config.service3Description,
      longDescription: config.service3LongDescription,
      icon: Radio,
      benefits: [
        'Passive and active RFID support',
        'Real-time location tracking',
        'Automated inventory counts',
        'Asset lifecycle management',
      ],
      pricing: config.service3Pricing,
      timeline: config.service3Timeline,
      featured: false,
      badge: null,
      cta: config.service3CTA,
      ctaHref: config.service3CTAHref,
    },
    {
      id: 'analytics-reporting',
      title: config.service4Title,
      description: config.service4Description,
      longDescription: config.service4LongDescription,
      icon: BarChart3,
      benefits: [
        'Customizable KPI dashboards',
        'Automated performance reports',
        'Trend analysis and forecasting',
        'Export to Excel and PDF',
      ],
      pricing: config.service4Pricing,
      timeline: config.service4Timeline,
      featured: false,
      badge: config.service4Badge,
      cta: config.service4CTA,
      ctaHref: config.service4CTAHref,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          <span data-editable={`service${index + 1}Title`}>{service.title}</span>
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            <span data-editable={`service${index + 1}Badge`}>{service.badge}</span>
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        <span data-editable={`service${index + 1}Description`}>
                          {service.description}
                        </span>
                      </p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          <span data-editable={`service${index + 1}LongDescription`}>
                            {service.longDescription}
                          </span>
                        </p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              <span data-editable={`service${index + 1}Pricing`}>
                                {service.pricing}
                              </span>
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              <span data-editable={`service${index + 1}Timeline`}>
                                {service.timeline}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                          onClick={() => navigate(service.ctaHref)}
                          data-editable-href={`service${index + 1}CTAHref`}
                          data-href={service.ctaHref}
                        >
                          <span data-editable={`service${index + 1}CTA`}>{service.cta}</span>
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            <span data-editable="bottomTitle">{config.bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            <span data-editable="bottomDescription">{config.bottomDescription}</span>
          </p>
          <Button
            size="lg"
            onClick={() => navigate(config.bottomCTAHref)}
            data-editable-href="bottomCTAHref"
            data-href={config.bottomCTAHref}
          >
            <span data-editable="bottomCTA">{config.bottomCTA}</span>
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
