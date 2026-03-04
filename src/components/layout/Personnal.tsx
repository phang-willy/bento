import { BsEnvelopeFill, BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import profile from "@/assets/profile.webp?w=256;512;768&format=webp&as=srcset";
import ContactLink from "@/components/ui/custom/ContactLink";
import Image from "@/components/ui/custom/Image";
import Map from "@/components/ui/custom/Map";

function Personnal() {
  return (
    <section className="flex flex-col gap-8 xl:gap-12">
      <article className="flex flex-col justify-center items-start gap-8 xl:justify-start xl:gap-8 xl:flex-row xl:items-stretch p-4">
        <Image
          srcSet={profile}
          sizes="(max-width: 768px) 256px, (max-width: 1580px) 512px, 768px"
          alt="Photo de PHANG Willy"
          className="rounded-full max-w-32 max-h-32 object-cover w-full h-full border-8 border-main bg-main"
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
      </article>
      <article className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold">Où me trouver :</h2>
        <div className="grid grid-cols-12 gap-4">
          <Map
            center={[48.8544, 2.3471]}
            zoom={11}
            markers={
              [
                { 
                  position: [48.8544, 2.3471],
                  popup: "Disponible à Paris et en Ile-de-France"
                },
              ]
            }
            className="rounded-lg overflow-hidden card p-4 col-span-12 xl:col-span-6"
            aria-label="Disponible à Paris et en Ile-de-France"
          />
        </div>
      </article>
      <article className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold sticky top-0 py-4 bg-background xl:top-auto">Liens utiles :</h1>
        <div className="grid grid-cols-12 gap-4">
          <ContactLink
            href="https://github.com/phang-willy"
            username="phang-willy"
            aria-label="Ouvrir le profil GitHub de PHANG Willy"
            where="Github"
            icon={<BsGithub />}
          />
          <ContactLink
            href="https://linkedin.com/in/phang-willy"
            username="phang-willy"
            aria-label="Ouvrir le profil LinkedIn de PHANG Willy"
            where="LinkedIn"
            icon={<BsLinkedin />}
          />
          <ContactLink
            href="#"
            username="PHANG Willy"
            aria-label="Ouvrir le CV de PHANG Willy"
            where="CV"
            icon={<BsFileEarmarkPdfFill />}
          />
          <ContactLink
            href="mailto:pro.phang.willy@gmail.com"
            username="pro.phang.willy@gmail.com"
            where="Email"
            aria-label="Envoyer un email à PHANG Willy"
            icon={<BsEnvelopeFill />}
          />
        </div>
      </article>
    </section>
  );
}

export default Personnal;