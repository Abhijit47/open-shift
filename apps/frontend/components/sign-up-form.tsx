'use client';

import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@workspace/ui/components/item';
import {
  ChevronRight,
  FlaskConical,
  SearchIcon,
  Stethoscope,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Check, ChevronsUpDown } from 'lucide-react';

import { Checkbox } from '@workspace/ui/components/checkbox';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@workspace/ui/components/command';
import InputPasswordStrength from '@workspace/ui/components/extends/input-password-strength';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from '@workspace/ui/components/field';
import { Input } from '@workspace/ui/components/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';
import { toast } from '@workspace/ui/components/sonner';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const isDev = process.env.NODE_ENV === 'development';

export default function SignUpForm() {
  const [step, setStep] = useState(1);

  function prevStep(newStep: number) {
    if (newStep < 1 || newStep > 6) return;
    setStep(newStep);
  }

  function nextStep(newStep: number) {
    if (newStep < 1 || newStep > 6) return;
    setStep(newStep);
  }

  switch (step) {
    case 1:
      return <Step1 onPrevStep={prevStep} onNextStep={nextStep} />;

    case 2:
      return <Step2 onPrevStep={prevStep} onNextStep={nextStep} />;

    case 3:
      return <Step3 onPrevStep={prevStep} onNextStep={nextStep} />;

    case 4:
      return <Step4 onPrevStep={prevStep} onNextStep={nextStep} />;

    case 5:
      return <Step5 onPrevStep={prevStep} onNextStep={nextStep} />;

    case 6:
      return <Step6 onPrevStep={prevStep} onNextStep={nextStep} />;

    default:
      return null;
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type StepProps = {
  onPrevStep: (newStep: number) => void;
  onNextStep: (newStep: number) => void;
};

function Step6(props: StepProps) {
  const router = useRouter();

  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>Please provide your details</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className={'space-y-2'}>
        <FieldSet>
          <FieldGroup className={'gap-3'}>
            <Field className={'gap-2'}>
              <FieldLabel htmlFor='firstName'>First name</FieldLabel>
              <Input id='firstName' type='text' placeholder='Max' />
            </Field>
            <Field className={'gap-2'}>
              <FieldLabel htmlFor='lastName'>Last name</FieldLabel>
              <Input id='lastName' type='text' placeholder='Leiter' />
            </Field>
            <Field className={'gap-2'}>
              <FieldLabel htmlFor='phone'>Mobile number</FieldLabel>
              <Input id='phone' type='tel' placeholder='04xx xxx xxx' />
            </Field>
            <Field className={'gap-2'}>
              <FieldLabel htmlFor='email'>Email</FieldLabel>
              <Input
                id='email'
                type='email'
                placeholder='someone@example.com'
              />
            </Field>
            <Field className={'gap-2'}>
              <FieldLabel htmlFor='password'>Password</FieldLabel>
              <FieldDescription className={'text-xs'}>
                Create a strong password that is 8+ characters long and includes
                uppercase and lowercase letters, numbers and special characters
                (e.g. @, !, #, %).
              </FieldDescription>

              <InputPasswordStrength statusInfo={false} />
            </Field>
            <FieldSeparator />
            <Field orientation='horizontal'>
              <Checkbox id='finder-pref-9k2-sync-folders-nep' defaultChecked />
              <FieldContent>
                <FieldDescription className={'text-xs'}>
                  I agree to Open Service&apos;s Support{' '}
                  <Link
                    href={'#'}
                    className={buttonVariants({
                      variant: 'link',
                      className: 'p-0! h-fit! inline-block text-xs',
                    })}>
                    Worker Terms of Use
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={'#'}
                    className={buttonVariants({
                      variant: 'link',
                      className: 'p-0! h-fit! inline-block text-xs',
                    })}>
                    Privacy Policy
                  </Link>{' '}
                  , and confirm that I have read Open Service&apos;s{' '}
                  <Link
                    href={'#'}
                    className={buttonVariants({
                      variant: 'link',
                      className: 'p-0! h-fit! inline-block text-xs',
                    })}>
                    Privacy Collection Notice
                  </Link>
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </CardContent>
      <CardFooter
        className={cn(
          'flex',
          isDev ? 'items-center justify-between' : 'justify-center self-center'
        )}>
        {isDev && (
          <Button
            type='button'
            className={'rounded-[4px]!'}
            variant={'skewed-outline'}
            onClick={() => {
              props.onPrevStep(5);
            }}>
            Back
          </Button>
        )}
        <Button
          type='button'
          className={'rounded-[4px]'}
          variant={'skewed'}
          onClick={() => {
            toast.promise(sleep(300), {
              loading: 'Creating your account...',
              success: 'Account created successfully!',
              error: 'Error creating account. Please try again.',
            });
            setTimeout(() => {
              router.push('/onboarding');
            }, 250);
          }}>
          Create account
        </Button>
      </CardFooter>
    </Card>
  );
}

function Step5(props: StepProps) {
  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>When would you like to start working?</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>Immediately</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(6)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>Within the next 2 Weeks</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(6)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>In 2-4 weeks</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(6)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>Later than 4 weeks</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(6)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>I’m not sure</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(6)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
      </CardContent>

      {isDev && (
        <CardFooter className={'flex items-center justify-between'}>
          <Button
            variant={'skewed-outline'}
            className='rounded-[4px]!'
            onClick={() => props.onPrevStep(4)}>
            Back
          </Button>
          <Button
            variant={'skewed'}
            className='rounded-[4px]!'
            onClick={() => props.onNextStep(6)}>
            Next
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

function Step4(props: StepProps) {
  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>
            How many hours a week would you like to work on the platform?
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>1-10 hours of work per week</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(5)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>11-25 hours of work per week</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(5)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>26-35 hours of work per week</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(5)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemContent>
            <ItemTitle>More than 36 hours per week</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(5)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
      </CardContent>
      {isDev && (
        <CardFooter className={'flex items-center justify-between'}>
          <Button
            variant={'skewed-outline'}
            className='rounded-[4px]!'
            onClick={() => props.onPrevStep(3)}>
            Back
          </Button>
          <Button
            variant={'skewed'}
            className='rounded-[4px]!'
            onClick={() => props.onNextStep(5)}>
            Next
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

function Step3(props: StepProps) {
  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>Where are you located?</h2>
        </CardTitle>
        <CardDescription>State/Postcode/Suburb*</CardDescription>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <Location />
      </CardContent>
      <CardFooter
        className={cn(
          'flex',
          isDev ? 'items-center justify-between' : 'justify-end'
        )}>
        {isDev && (
          <Button
            variant={'skewed-outline'}
            className='rounded-[4px]!'
            onClick={() => props.onPrevStep(2)}>
            Back
          </Button>
        )}
        <Button
          variant={'skewed'}
          className='rounded-[4px]!'
          onClick={() => props.onNextStep(4)}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

function Step2(props: StepProps) {
  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardContent className={'h-36 w-full'}>
        <Image
          src={'/p6-fit.9ac324b9 1.svg'}
          alt='login-scrn'
          width={300}
          height={300}
          className={'w-full h-full object-contain'}
        />
      </CardContent>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>You won’t be a Open Service employee.</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <CardDescription>
          <p className={'font-semibold'}>
            Instead, you’ll operate as an independent contractor, which means:
          </p>
          <ul className={'list-disc list-inside'}>
            <li>You’ll be your own boss</li>
            <li>
              You’ll need to have (or apply for) an Australian Business Number
              (ABN)
            </li>
            <li>
              You’ll be responsible for managing your own tax and superannuation
            </li>
          </ul>
        </CardDescription>
        <CardDescription>
          <p className={'font-semibold'}>
            To be approved on Open Service, you’ll also need:
          </p>
          <ul className={'list-disc list-inside'}>
            <li>A valid mobile phone number</li>{' '}
            <li>
              An NDIS Worker Screening Check (required for all services,
              including aged care)
            </li>
            <li>At least two professional or character references</li>
            <li>Relevant qualifications for the services you plan to offer</li>
            <li>
              A valid Working with Vulnerable People card (required in Tasmania
              and the ACT)
            </li>
            <li>
              A Working with Children Check, if you intend to work with children
              or young people under 18
            </li>
            <li>A profile photo and a short personal bio</li>
          </ul>
        </CardDescription>
      </CardContent>
      <CardFooter className={'flex items-center justify-between'}>
        <Button
          variant={'skewed-outline'}
          className='rounded-[4px]!'
          onClick={() => props.onPrevStep(1)}>
          Back
        </Button>
        <Button
          variant={'skewed'}
          className='rounded-[4px]!'
          onClick={() => props.onNextStep(3)}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

function Step1(props: StepProps) {
  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>
            What is the main service you would like to provide on Mable? *
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <Stethoscope className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className={'text-base font-semibold'}>Nursing</ItemTitle>
            <ItemDescription>
              I am a Registered or Enrolled Nurse.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(2)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <FlaskConical className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className={'text-base font-semibold'}>
              Personal Care
            </ItemTitle>
            <ItemDescription>
              I am an occupational therapist, physiotherapist, psychologist, or
              speech pathologist.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              variant='outline'
              size='icon-sm'
              onClick={() => props.onNextStep(2)}>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
      </CardContent>
      <CardFooter className={'flex items-center justify-between'}>
        <Link
          href={'/'}
          className={buttonVariants({
            variant: 'skewed-outline',
            className: 'rounded-[4px]!',
          })}>
          Back
        </Link>
        <Button
          variant={'skewed'}
          className='rounded-[4px]!'
          onClick={() => props.onNextStep(2)}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

const locations = [
  {
    value: 'new-south-wales',
    label: 'New South Wales',
  },
  {
    value: 'victoria',
    label: 'Victoria',
  },
  {
    value: 'queensland',
    label: 'Queensland',
  },
  {
    value: 'south-australia',
    label: 'South Australia',
  },
  {
    value: 'western-australia',
    label: 'Western Australia',
  },
  {
    value: 'tasmania',
    label: 'Tasmania',
  },
  {
    value: 'australian-capital-territory',
    label: 'Australian Capital Territory',
  },
  {
    value: 'northern-territory',
    label: 'Northern Territory',
  },
];

function Location() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between'>
          {value ? (
            locations.find((location) => location.value === value)?.label
          ) : (
            <>
              <SearchIcon className={'size-4'} />
              Select location...
            </>
          )}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-(--radix-popover-trigger-width) p-0'>
        <Command>
          <CommandInput placeholder='Search location...' className='h-9' />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}>
                  {location.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === location.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
