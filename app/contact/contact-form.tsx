'use client';

import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/user/elements/form';
import emailjs from '@emailjs/browser';
import { Input } from '@/user/elements/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/user/elements/textarea';
import { MdTopic } from 'react-icons/md';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/user/elements/select';
import * as React from 'react';

const formSchema = z.object({
    user_email: z
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: 'Please Enter a valid email address',
      })
      .min(5),
    name: z
      .string()
      .regex(/^[\s'A-Za-z-]{4,50}$/, {
        message: 'Specify your full name',
      })
      .min(4, {
        message: 'Your full name must be at least 4 characters.',
      })
      .max(20, {
        message:
          'Your full name must not be longer than 20 characters.',
      }),
     message: z
      .string()
      .min(10, {
        message: 'message must be at least 10 characters.',
      })
      .max(360, {
        message: 'Bio must not be longer than 360 characters.',
      }),
   work: z.string().optional(),
    workType: z.enum([
      'I have a cool Project idea',
      'I want to connect',
      'I have a random question',
      'other',
    ]),
}).refine(
    (data) => {
      if (data.workType && data.work) {
        return data.workType === data.work.toLowerCase();
      }

      return true;
    },
    {
      message: 'Please, select an option',
      path: ['courseType'],
    },
  );

export function ProfileForm() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: '',
      name: 'Wakil Abdul Azeez',
      message: '',
      workType: undefined
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const template = {
        name: values.name,
        user_email: values.user_email,
        message: values.message,
        workType: values.workType
      };

    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
       template,
        process.env.NEXT_PUBLIC_KEY!,
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.reset();
        },
        (error: any) => {
          setSuccess(false);
          setError(true);
        },
      );
  }

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
          <FormField
            control={form.control}
            name='user_email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>From:</FormLabel>
                <FormControl>
                  <Input placeholder='johndoe@pro.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
          )}
          />

          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>To:</FormLabel>
                <FormControl>
                  <Input readOnly placeholder='Wakil Abdul Azeez' type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
          )}
          />
        </div>

        <FormField
          control={form.control}
          name='workType'
          render={({ field }) => (
            <FormItem className='mb-4'>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='h-12 rounded-2xl !border-[1.5px]'>
                    <div className='flex items-center gap-2'>
                      <MdTopic size={24} />
                      <SelectValue
                        className='self-start !font-medium !text-neutral-200'
                        placeholder='Please select a topic...'
                      />
                    </div>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='relative z-[9999] rounded-2xl border-solid !border-dark-400/20 !bg-[#14142B] text-neutral-200'>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-dark-400'
                    value='I have a cool Project idea'
                  >
                    I have a cool Project idea
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-dark-400'
                    value='I want to connect'
                  >
                    I want to connect
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-dark-400'
                    value='I have a random question'
                  >
                    I have a random question
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all hover:!bg-dark-400'
                    value='other'
                  >
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
            )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='mb-4'>
              <FormLabel>Your Message:</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
                  placeholder='Please write a message...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
        />

        <div>
          {success && <p className='text-green-600'>Your message has been sent Successfully. I will soon get back to you.</p>}
          {error && <p className='text-red-500'>Some error occurred. Please send me a direct message using the email bottom 👇</p>}
        </div>
        <button
          className='group/btn relative block h-12 w-full rounded-2xl bg-dark-400 font-medium !text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 hover:bg-[#327ff3] dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
        >Send Message  (I won&apos;t keep you waiting)
        </button>
      </form>
    </Form>
  );
}
