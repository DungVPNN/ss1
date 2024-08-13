import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        src="https://shotkit.com/wp-content/uploads/2020/07/nasa023.jpg" 
        alt="Nasa blablabla"
        width={500} 
        height={300}    
      />
    </div>
  );
}
