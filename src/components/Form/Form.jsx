"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
export const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phoneNr", data.phoneNr);
    formData.append("email", data.email);
    formData.append("Clinica", data.Clinica);
    formData.append("mentiuni", data.mentiuni);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.ok) {
        setIsSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  function handleReset() {
    setIsSubmitted(false);
  }

  return (
    <section className="max-w-[1320px] mx-auto my-10 flex-col md:flex-row flex p-4 md:p-10 lg:px-0 lg:py-10">
      <div className="md:w-1/2 ">
        <Image
          height={850}
          width={600}
          className="w-full h-[300px] object-cover md:h-full"
          src="https://newsite.themed.ro/uploads/the-med.png"
          alt="poza cu logo-ul clinicii"
        />
      </div>
      {isSubmitted ? (
        <div className="md:p-14 p-4 text-center md:w-1/2">
          <h2 className="text-4xl mb-4">Multumim pentru mesaj!</h2>
          <p className="text-lg">
            Un reprezentant al clinicii va lua legatura cu dumneavoastra in cel
            mai scurt timp posibil.
          </p>
          <button
            onClick={() => handleReset()}
            className="bg-[var(--accent)] w-1/2 mx-auto py-2 mt-5 hover:bg-[var(--accent-hover)]"
          >
            Reseteaza formularul
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-[var(--primary)] md:w-1/2 gap-4 font-Body  p-4  text-center font-bold md:p-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Programare online:</h2>
          <fieldset className=" flex flex-col gap-4 border-white">
            <label htmlFor="name">Nume Prenume*</label>
            <input
              {...register("name", {
                required: 'Campul este obligatoriu',
                maxLength: {
                  value: 25,
                  message: "Numele trebuie sa contina maxim 25 de caractere",
                },
                minLength: {
                  value: 5,
                  message: "Numele trebuie sa contina minim 5 caractere",
                },
              })}
              placeholder="Nume si prenume"
              type="text"
            />
            <p className="text-[var(--accent)] text-start">{errors.name?.message}</p>
          </fieldset>
          <fieldset className=" flex flex-col gap-4 border-white">
            <label htmlFor="phoneNr">Telefon*</label>
            <input
              {...register("phoneNr", { required: 'Campul este obligatoriu', maxLength: 12 })}
              placeholder="+40 700 000 000"
              type="text"
            />
            <p className="text-[var(--accent)] text-start">{errors.phoneNr?.message}</p>
          </fieldset>
          <fieldset className=" flex flex-col gap-4 border-white">
            <label htmlFor="email">E-mail*</label>
            <input
              {...register("email", { required: 'Campul este obligatoriu' })}
              placeholder="nume.prenume@email.com"
              type="email"
            />
             <p className="text-[var(--accent)] text-start">{errors.email?.message}</p>
          </fieldset>
          <fieldset className=" flex relative flex-col gap-4 border-white">
            <select
              {...register("Clinica", { required: 'Alege clinica' })}
              className="select  select-ghost w-full text-center text-lg border-b border-white"
            >
              <option value="">Selecteaza clinica </option>
              <option value="Bucuresti">Bucuresti</option>
              <option value="Slatina">Slatina</option>
            </select>
            <p className="text-[var(--accent)] text-start">{errors.Clinica?.message}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute right-16 top-4 md:right-1/3 " fill="#000" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </fieldset>
          <fieldset className=" flex flex-col ">
            <label htmlFor="mentiuni"></label>
            <textarea
              {...register("mentiuni", { required: false })}
              name="mentiuni"
              className="w-full border-b border-white"
              placeholder="Adauga detalii..."
              id="mentiuni"
            ></textarea>
          </fieldset>
          <button className="bg-[var(--accent)] w-1/2 mx-auto py-2 mt-5 hover:bg-[var(--accent-hover)]">
            Trimite
          </button>
        </form>
      )}
    </section>
  );
};
