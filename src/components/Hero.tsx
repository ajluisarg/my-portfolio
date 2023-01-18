import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const RainbowHighlightText: React.FC<{ label: string; color: any }> = ({ label, color }) => {
  return (
    <RoughNotation
      type='highlight'
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={Math.round(50 * label.length)}
      color={color}
    >
      <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
        {label}
      </h1>
    </RoughNotation>
  );
};

export default () => {
  const skills = [
    {
      label: 'Developer',
      color: '#F59E0B',
    },
    {
      label: 'Programmer',
      color: '#84CC16',
    },
    {
      label: 'Youtuber',
      color: '#10B981',
    },
  ];
  return (
    <div className='flex flex-row justify-center items-start overflow-hidden'>
      {/* Text container */}

      <div className='w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20'>
        <RoughNotationGroup show={true}>
          {skills.map((skill) => (
            <RainbowHighlightText {...skill} />
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className='hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20'>
        <div className='w-3/4 '>
          <img
            src='https://xsgames.co/randomusers/avatar.php?g=male'
            alt='avatar'
            className=' shadow'
          />
          <div className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-90deg-up'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
                />
              </svg>
              <p className='font-mono'>That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
