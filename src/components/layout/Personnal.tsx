import { BsEnvelopeFill, BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import profile from "@/assets/profile.webp?w=256;512;768&format=webp&as=srcset";
import ContactLink from "@/components/ui/ContactLink";
import Image from "@/components/ui/Image";
import Map from "@/components/ui/Map";

function Personnal() {
  return (
    <div className="flex flex-col gap-8 xl:gap-12">
      <div className="flex flex-col justify-center items-start gap-8 xl:justify-start xl:gap-8 xl:flex-row xl:items-stretch">
        <Image
          srcSet={profile}
          sizes="(max-width: 768px) 256px, (max-width: 1580px) 512px, 768px"
          alt="Photo de PHANG Willy"
          className="rounded-full max-w-32 max-h-32 object-cover w-full h-full border-8 border-main"
        />
        <div className="flex flex-col gap-2 xl:gap-4">
          <h1 className="text-4xl font-bold xl:text-6xl">
            PHANG Willy
          </h1>
          <div className="flex flex-col">
            <p>Développeur <strong>Full Stack</strong></p>
            <p>Disponible à Paris et en Ile-de-France</p>
          </div>
        </div>
      </div>
      <div>
        <Map
          center={[48.8544, 2.3471]}
          zoom={11}
          markers={[
            { position: [48.8544, 2.3471], popup: "Disponible à Paris et en Ile-de-France" },
          ]}
          className="rounded-lg overflow-hidden card p-4 xl:max-w-3/4"
          aria-label="Disponible à Paris et en Ile-de-France"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Liens utiles :</h2>
        <div className="grid grid-cols-12 gap-4">
          <ContactLink
            href="https://github.com/phang-willy"
            title="GitHub : phang-willy"
            aria-label="Ouvrir le profil GitHub de PHANG Willy"
            icon={<BsGithub />}
          />
          <ContactLink
            href="https://linkedin.com/in/phang-willy"
            title="LinkedIn : phang-willy"
            aria-label="Ouvrir le profil LinkedIn de PHANG Willy"
            icon={<BsLinkedin />}
          />
          <ContactLink
            href="#"
            title="CV"
            aria-label="Ouvrir le CV de PHANG Willy"
            icon={<BsFileEarmarkPdfFill />}
          />
          <ContactLink
            href="mailto:pro.phang.willy@gmail.com"
            title="Email : pro.phang.willy@gmail.com"
            aria-label="Envoyer un email à PHANG Willy"
            icon={<BsEnvelopeFill />}
          />
        </div>
      </div>
    </div>
  );
}

export default Personnal;