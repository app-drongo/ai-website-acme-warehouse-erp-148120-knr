'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Package, Warehouse, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Warehouse ERP Pricing',
  mainTitle: 'Transparent Warehouse ERP',
  mainTitleHighlight: 'Pricing Plans',
  mainDescription:
    'Choose the perfect warehouse management solution for your business. All plans include barcode scanning, RFID integration, and 99.9% inventory accuracy. No setup fees.',
  billingMonthly: 'Monthly',
  billingAnnual: 'Annual',
  billingAnnualBadge: 'Save 25%',
  plan1Name: 'Starter Warehouse',
  plan1Description: 'Perfect for small warehouses and single locations',
  plan1Price: '$199',
  plan1Period: '/month',
  plan1CTA: 'Start Free Trial',
  plan1CTAHref: '/signup',
  plan2Name: 'Professional ERP',
  plan2Description: 'Complete solution for growing warehouse operations',
  plan2Price: '$499',
  plan2Period: '/month',
  plan2Badge: 'Most Popular',
  plan2CTA: 'Start Free Trial',
  plan2CTAHref: '/signup',
  plan2Trial: '30-day free trial • Implementation included',
  plan3Name: 'Enterprise Suite',
  plan3Description: 'Advanced multi-location warehouse management',
  plan3Price: 'Custom',
  plan3Badge: 'Best Value',
  plan3CTA: 'Schedule Demo',
  plan3CTAHref: '/demo',
  bottomTitle: 'Need a custom warehouse solution?',
  bottomDescription:
    'We offer tailored ERP implementations for complex warehouse operations with specialized requirements. Our team will design the perfect solution for your inventory management needs.',
  bottomCTA: 'Contact Sales Team',
  bottomCTAHref: '/contact',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: config.plan1Name,
      description: config.plan1Description,
      price: config.plan1Price,
      period: config.plan1Period,
      badge: null,
      icon: Package,
      features: [
        'Single warehouse location',
        'Barcode scanning integration',
        'Basic RFID asset tracking',
        'Up to 10,000 SKUs',
        'Real-time inventory updates',
        'Standard reporting suite',
        'Email support',
        'Mobile app access',
      ],
      cta: config.plan1CTA,
      ctaHref: config.plan1CTAHref,
      popular: false,
    },
    {
      name: config.plan2Name,
      description: config.plan2Description,
      price: config.plan2Price,
      period: config.plan2Period,
      badge: config.plan2Badge,
      icon: Warehouse,
      features: [
        'Up to 5 warehouse locations',
        'Advanced barcode & RFID scanning',
        'Automated reorder points',
        'Unlimited SKUs',
        '99.9% inventory accuracy',
        '75+ custom reports',
        'Multi-location transfers',
        'Priority phone support',
        'API integrations',
        'Cycle counting automation',
      ],
      cta: config.plan2CTA,
      ctaHref: config.plan2CTAHref,
      popular: true,
    },
    {
      name: config.plan3Name,
      description: config.plan3Description,
      price: config.plan3Price,
      period: '',
      badge: config.plan3Badge,
      icon: Building2,
      features: [
        'Unlimited warehouse locations',
        'Enterprise RFID infrastructure',
        'Advanced analytics & forecasting',
        'Custom workflow automation',
        'SOC 2 Type II compliance',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom integrations',
        'On-site training included',
        'SLA guarantee (99.8% uptime)',
      ],
      cta: config.plan3CTA,
      ctaHref: config.plan3CTAHref,
      popular: false,
    },
  ];

  const getAnnualPrice = (monthlyPrice: string) => {
    if (monthlyPrice === 'Custom') return 'Custom';
    const monthly = parseInt(monthlyPrice.replace('$', ''));
    const annual = Math.round(monthly * 12 * 0.75); // 25% discount
    return `$${annual}`;
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingMonthly">{config.billingMonthly}</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingAnnual">{config.billingAnnual}</span>
              <Badge variant="secondary" className="text-xs">
                <span data-editable="billingAnnualBadge">{config.billingAnnualBadge}</span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                  plan.popular
                    ? 'border-primary/50 shadow-lg shadow-primary/10 lg:scale-105'
                    : 'border-border/50 hover:border-primary/20'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                      <Star className="size-3 mr-1 fill-current" />
                      <span data-editable="plan2Badge">{plan.badge}</span>
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                )}

                <CardHeader className={cn('relative text-center pb-8', plan.popular && 'pt-10')}>
                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="mb-4 mx-auto w-fit">
                      <span data-editable="plan3Badge">{plan.badge}</span>
                    </Badge>
                  )}

                  <div className="mb-4 mx-auto w-fit p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="size-8 text-primary" />
                  </div>

                  <CardTitle className="text-2xl mb-2">
                    <span data-editable={`plan${index + 1}Name`}>{plan.name}</span>
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    <span data-editable={`plan${index + 1}Description`}>{plan.description}</span>
                  </CardDescription>

                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">
                      <span data-editable={`plan${index + 1}Price`}>
                        {billingCycle === 'annual' ? getAnnualPrice(plan.price) : plan.price}
                      </span>
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">
                        <span data-editable={`plan${index + 1}Period`}>
                          {billingCycle === 'annual' ? '/year' : plan.period}
                        </span>
                      </span>
                    )}
                  </div>
                  {billingCycle === 'annual' && plan.price !== 'Custom' && (
                    <p className="text-sm text-primary mt-2">
                      Save ${Math.round(parseInt(plan.price.replace('$', '')) * 12 * 0.25)} annually
                    </p>
                  )}
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={cn(
                      'w-full text-base py-6',
                      plan.popular && 'bg-primary hover:bg-primary/90'
                    )}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate(plan.ctaHref)}
                    data-editable-href={`plan${index + 1}CTAHref`}
                    data-href={plan.ctaHref}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    <span data-editable={`plan${index + 1}CTA`}>{plan.cta}</span>
                  </Button>

                  {plan.name === config.plan2Name && (
                    <p className="text-center text-sm text-muted-foreground">
                      <span data-editable="plan2Trial">{config.plan2Trial}</span>
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            <span data-editable="bottomTitle">{config.bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            <span data-editable="bottomDescription">{config.bottomDescription}</span>
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate(config.bottomCTAHref)}
            data-editable-href="bottomCTAHref"
            data-href={config.bottomCTAHref}
          >
            <span data-editable="bottomCTA">{config.bottomCTA}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
