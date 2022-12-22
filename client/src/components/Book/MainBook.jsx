import React from 'react'
import BookImage from '../../images/Book.jpeg'
import { Flex } from '../../pages/WelcomePage/Welcome.styled'
import { Text } from './Book.styled'

const MainBook = () => {
	return (
		<Flex>
			<img
				src={BookImage}
				style={{
					width: '200px',
					height: '312px',
					borderRadius: '14px',
					marginRight: '2em',
				}}
				alt='err'
			/>
			<Flex column={'column'} justifyContent={'start-end'}>
				<Text fontSize={'40px'} lineHeight={'48px'} bottom={'10px'}>
					Исчезнувшая
				</Text>
				<Text
					fontSize={'25px'}
					lineHeight={'30px'}
					fontWeight={'700'}
					bottom={'15px'}
				>
					Гиллиан Флинн
				</Text>
				<Text fontSize={'16px'} lineHeight={'19px'} width={'300px'}>
					"1984" — культовый роман Джорджа Оруэлла, действие которого
					разворачивается в тоталитарном, бюрократическом государстве, где
					процветает пропаганда и цензура, и где один человек решил побороться
					за право быть индивидуальной личностью.
				</Text>
			</Flex>
		</Flex>
	)
}

export default MainBook