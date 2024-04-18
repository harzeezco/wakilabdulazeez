'use client';

import { Button } from '@/user/elements/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/user/elements/form';
import { Input } from '@/user/elements/input';
import { Label } from '@/user/elements/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/user/elements/select';
import { Textarea } from '@/user/elements/textarea';
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MdTopic } from 'react-icons/md';
import { z } from 'zod';

const formSchema = z
  .object({
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
    to: z.string().regex(/^[\s'A-Za-z-]{4,50}$/),
    email: z
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: 'Please Enter a valid email address',
      })
      .min(5),
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
  })
  .refine(
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

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      to: 'Wakil Abdul Azeez',
      workType: undefined,
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    console.log(values);
    console.log('hello');
  }

  return (
    <div className='border-dark-400/20 shadow-input mx-auto mt-16 w-full max-w-4xl rounded-3xl border border-solid bg-[#14142B] p-4 md:p-8'>
      <h2 className='text-center text-sm font-bold text-neutral-200'>
        New message to Wakil
      </h2>

      <Form {...form}>
        <form className='my-8' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <LabelInputContainer>
                      <Label htmlFor='fullname'>From:</Label>
                      <Input
                        {...field}
                        id='fullname'
                        placeholder='Full Name'
                        type='text'
                      />
                    </LabelInputContainer>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='to'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <LabelInputContainer>
                      <Label htmlFor='lastname'>To:</Label>
                      <Input
                        {...field}
                        disabled
                        id='to'
                        placeholder='Wakil Abdul Azeez'
                        type='text'
                      />
                    </LabelInputContainer>
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
                  <SelectContent className='!border-dark-400/20 relative z-[9999] rounded-2xl border-solid !bg-[#14142B] text-neutral-200'>
                    <SelectItem
                      className='hover:!bg-dark-400 cursor-pointer !rounded-[10px] !transition-all'
                      value='I have a cool Project idea'
                    >
                      I have a cool Project idea
                    </SelectItem>
                    <SelectItem
                      className='hover:!bg-dark-400 cursor-pointer !rounded-[10px] !transition-all'
                      value='I want to connect'
                    >
                      I want to connect
                    </SelectItem>
                    <SelectItem
                      className='hover:!bg-dark-400 cursor-pointer !rounded-[10px] !transition-all'
                      value='I have a random question'
                    >
                      I have a random question
                    </SelectItem>
                    <SelectItem
                      className='hover:!bg-dark-400 cursor-pointer !rounded-[10px] !transition-all'
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
              <FormItem className='mb-8'>
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

          <Button
            className='group/btn !bg-dark-400 relative block h-12 w-full rounded-2xl font-medium !text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
            type='submit'
          >
            Send Message &rarr;
            <BottomGradient />
          </Button>

          <div className='my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700' />
        </form>
      </Form>
    </div>
  );
}

function LabelInputContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
}

function BottomGradient() {
  return (
    <>
      <span className='absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100' />
      <span className='absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100' />
    </>
  );
}
