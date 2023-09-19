import React from 'react';
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import LogoutButton from '../components/LogoutButton';

const TopNav: React.FC = async () => {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return (
		<nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
			<div className='w-full max-w-4xl flex justify-between items-center p-4 text-sm text-foreground'>
				<div>
					{user ? (
						<div className='flex items-center gap-4'>
							Hey, {user.email}!
							<LogoutButton />
						</div>
					) : (
						<Link
							href='/login'
							className='py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover'
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default TopNav;
