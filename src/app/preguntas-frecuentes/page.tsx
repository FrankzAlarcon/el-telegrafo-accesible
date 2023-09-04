import React, { type FC } from 'react'
import FrequentlyAskedQuestion from '@/components/FrequentlyAskedQuestion'
import Title from '@/components/Title'
import LogoIcon from '@/components/LogoIcon'
import { shareIcons } from '@/helpers/icons'

const FAQPage: FC<any> = () => {
  const frequentlyAskedQuestions = [

    {
      question: '¿Cómo puedo contactar al equipo de redacción?',
      answer: 'Puedes ponerte en contacto con nuestro equipo de redacción a través de la página de contacto en nuestro sitio web. También puedes enviar un correo electrónico a info@comunica.ec o escribirnos a nuestro whasapp.'
    },
    {
      question: '¿Dónde puedo encontrar noticias de última hora?',
      answer: 'Nuestras noticias de última hora se encuentran en la sección "Portada" en la página de inicio. También puedes activar las notificaciones para recibir alertas en tu dispositivo móvil cuando ocurran noticias importantes.'
    },
    {
      question: '¿Cómo puedo contribuir con noticias o artículos?',
      answer: 'Agradecemos tu interés en contribuir. Puedes enviar tus noticias o artículos a través de la página de envío de contenido en nuestro sitio web. Nuestro equipo de edición revisará tu contribución y se pondrá en contacto contigo si es seleccionada para su publicación.'
    },

    {
      question: '¿Cómo puedo denunciar noticias falsas o contenido inapropiado?',
      answer: 'Si encuentras noticias falsas o contenido inapropiado en nuestro sitio web, por favor, utiliza el formulario de denuncia que se encuentra en la parte inferior de la página. Nuestro equipo investigará y tomará las medidas necesarias.'
    },
    {
      question: '¿Qué medidas toman para garantizar la precisión de las noticias?',
      answer: 'Nos esforzamos por mantener altos estándares de precisión en nuestro periodismo. Nuestro equipo de redacción verifica cuidadosamente todas las fuentes y hechos antes de publicar noticias. Además, seguimos un riguroso proceso de edición y revisión.'
    },
    {
      question: '¿Cuál es su política de comentarios en los artículos?',
      answer: 'Valoramos los comentarios de nuestros lectores y fomentamos un entorno de discusión respetuosa. Todos los comentarios son moderados antes de su publicación para evitar contenido ofensivo o spam. Los comentarios que cumplan con nuestras directrices de comunidad serán publicados.'
    }
  ]

  return (
    <div className=' p-2 flex flex-col gap-6 mb-3'>
      <Title>PREGUNTAS FRECUENTES</Title>
      <div className='md:grid-cols-2 grid'>
        {frequentlyAskedQuestions.map((qa, index) => (
          <FrequentlyAskedQuestion
            key={index}
            question={qa.question}
            answer={qa.answer}
          />
        ))}
      </div>
      <div className='flex gap-3 justify-center items-center border-b pb-2 lg:px-8'>
        <p className='text-secondary text-lg'>Nuestras redes sociales:</p>
        <div className='flex gap-2 items-center'>
          {
            shareIcons.map((icon) => (
              <LogoIcon
                key={icon.href}
                href={icon.href}
                imageSrc={icon.imageSrc}
                imageAlt={icon.imageAlt}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FAQPage
