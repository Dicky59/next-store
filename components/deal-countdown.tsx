'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const calculateTimeRemaining = (targetDate: Date) => {
  const currentTime = new Date();
  const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0);
  return {
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  };
};

const DealCountdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  });

  const [time, setTime] = useState(() => calculateTimeRemaining(targetDate));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTime = calculateTimeRemaining(targetDate);
      setTime(newTime);

      if (
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0
      ) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

  return (
    <div className='bg-card border border-border rounded-[var(--radius)] shadow-sm p-6 md:p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        <div className='flex flex-col gap-4 justify-center'>
          <h3 className='h3-bold'>Deal Of The Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals
          of the Month! Every purchase comes with exclusive perks and offers,
          making this month a celebration of savvy choices and amazing deals.
          Don&apos;t miss out! 🎁🛒
        </p>
          <ul className='grid grid-cols-4 gap-2'>
            <StatBox label='Days' value={time.days} />
            <StatBox label='Hours' value={time.hours} />
            <StatBox label='Minutes' value={time.minutes} />
            <StatBox label='Seconds' value={time.seconds} />
          </ul>
          <div className='text-center'>
            <Button asChild size="lg" className="rounded-full">
              <Link href='/search'>View Products</Link>
            </Button>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src='/images/promo.jpg'
            alt='promotion'
            width={300}
            height={200}
            className='rounded-lg object-cover'
          />
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className='p-4 w-full text-center bg-muted/30 rounded-md'>
    <p className='text-3xl font-bold text-foreground'>{value}</p>
    <p className='text-sm text-muted-foreground'>{label}</p>
  </li>
);

export default DealCountdown;