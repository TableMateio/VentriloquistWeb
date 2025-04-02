import { getDictionary } from '@repo/internationalization';
import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import { Hero } from './components/hero';

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: HomeProps): Promise<Metadata> => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return createMetadata(dictionary.web.home.meta);
};

const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="mb-4 bg-red-600 p-4 text-center font-bold text-white text-xl">
          USING THE IMPORTED HERO COMPONENT NOW -{' '}
          {new Date().toLocaleTimeString()}
        </div>
        <Hero dictionary={dictionary} />
      </div>
    </div>
  );
};

export default Home;
