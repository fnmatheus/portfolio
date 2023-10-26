export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center px-[34px] gap-4 w-full">
      <h2 className="font-bold text-3xl">Entre em contato!</h2>
      <p className="text-justify">
        Estou sempre olhando para novas oportunidade e disponivel para contato.
        <br />
        Se tiver alguma pergunta ou precisar entrar em contato, vou responder mais breve possível!
      </p>
      <div className="flex flex-col w-full gap-2">
        <a href="mailto:nasc.matheusfrancisco@gmail.com" target="_blank" className="w-full h-[44px] bg-gradient-to-l from-lightBlue to-purple rounded-full flex justify-center items-center text-xl">
          enviar e-mail!
        </a>
        <a href="https://api.whatsapp.com/send?phone=5532998027268" target="_blank" className="w-full h-[44px] bg-gradient-to-l from-lightBlue to-purple rounded-full flex justify-center items-center text-xl">
          enviar whatsapp!
        </a>
      </div>
    </section>
  )
}