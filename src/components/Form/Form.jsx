"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
export const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const [isSubmitted,setIsSubmitted] = useState(false);

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
  
  function handleReset(){
    setIsSubmitted(false);
  }

  return (
    <section className="max-w-[1320px] mx-auto my-10 flex-col md:flex-row flex bg-[var(--primary)] items-center">
      <div className="md:w-1/2 w-full">
        <img
          className="w-full h-[300px] md:h-full object-cover"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtaWxlfGVufDB8fDB8fHww"
          alt="person smiling"
        />
      </div>
      {isSubmitted ? 
      <div className="md:p-20 p-4 text-center md:w-1/2">
        <h2 className="text-4xl mb-4">Multumim pentru mesaj!</h2>
        <p className="text-lg">Un reprezentant al clinicii va lua legatura cu dumneavoastra in cel mai scurt timp posibil.</p>
        <button onClick={() => handleReset()} className="bg-[var(--accent)] w-1/2 mx-auto py-2 mt-5 hover:bg-[var(--accent-hover)]">
          Reseteaza formularul
        </button>
      </div> :<form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-[var(--primary)] md:w-1/2 gap-4 font-Body  p-4  text-center font-bold md:p-20"
      >
        <h2 className="text-4xl mb-4">Programare online:</h2>
        <fieldset className=" flex flex-col gap-4 border-white">
          <label htmlFor="name">Nume Prenume*</label>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Nume si prenume"
            type="text"
          />
        </fieldset>
        <fieldset className=" flex flex-col gap-4 border-white">
          <label htmlFor="phoneNr">Telefon*</label>
          <input
            {...register("phoneNr", { required: true, maxLength: 12 })}
            placeholder="+40 700 000 000"
            type="text"
          />
        </fieldset>
        <fieldset className=" flex flex-col gap-4 border-white">
          <label htmlFor="email">E-mail*</label>
          <input
            {...register("email", { required: true })}
            placeholder="nume.prenume@email.com"
            type="email"
          />
        </fieldset>
        <fieldset className=" flex flex-col gap-4 border-white">
          <select {...register("Clinica", { required: true })} className="select select-ghost w-full text-center text-lg">
            <option value="">
              Selecteaza clinica
            </option>
            <option value="Bucuresti">Bucuresti</option>
            <option value="Slatina">Slatina</option>
          </select>
        </fieldset>
        <fieldset className="border-b-2 flex flex-col border-white">
          <label htmlFor="mentiuni"></label>
          <textarea
          {...register("mentiuni", { required: false })}
            name="mentiuni"
            className="w-full"
            placeholder="Adauga detalii..."
            id="mentiuni"
          ></textarea>
        </fieldset>
        <button className="bg-[var(--accent)] w-1/2 mx-auto py-2 mt-5 hover:bg-[var(--accent-hover)]">
          Trimite
        </button>
      </form>}
    </section>
  );
};
