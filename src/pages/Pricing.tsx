import React from 'react';
import Button from '../components/Button';
const PricingTier = ({
  title,
  price,
  features,
  isPopular = false,
  buttonVariant = 'outline'
}) => {
  return <div className={`
      bg-black/30 rounded-xl border border-purple-500/30 p-8 flex flex-col
      ${isPopular ? 'relative border-purple-500 shadow-lg shadow-purple-500/20' : ''}
    `}>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-2xl font-bold text-white">${price}</span>
        <span className="text-gray-400"> / month</span>
      </div>
      <div className="mb-8">
        <h4 className="text-white mb-4">Features:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => <li key={index} className="flex items-center gap-2 text-gray-300">
              <span className="h-2 w-2 bg-purple-500 rounded-full"></span>
              {feature}
            </li>)}
        </ul>
      </div>
      <div className="mt-auto">
        <Button variant={buttonVariant} fullWidth>
          Subscribe
        </Button>
      </div>
    </div>;
};
const Pricing = () => {
  return <div className="w-full py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Choose Your Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier title="Try (Free Plan)" price="0" features={['Limited AI queries (5 per day)', 'Basic job matches', 'No personalization']} />
        <PricingTier title="Pro (Most Popular)" price="9" features={['Unlimited AI queries', 'Advanced job matches', 'Salary insights by city', 'Skill gap tips']} isPopular={true} buttonVariant="gradient" />
        <PricingTier title="Buy (Premium Plan)" price="19" features={['Everything in Pro +', 'Resume feedback', 'AI career roadmap', 'Early access to new features']} />
      </div>
    </div>;
};
export default Pricing;