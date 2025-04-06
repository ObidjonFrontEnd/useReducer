import { useReducer } from 'react'

function App() {
	const counter = (rezult, typ) => {
		switch (typ.type) {
			case '+':
				return { count: rezult.count + 1 }
			case 'reset':
				return { count: 0 }
			case '-':
				return { count: rezult.count - 1 }
			default:
				return rezult
		}
	}

	const [state, dispatch] = useReducer(counter, { count: 0 })

	return (
		<div className='w-full h-[100vh] flex justify-center items-center'>
			<div className='w-[300px] bg-yellow-200 rounded-[8px] flex justify-center items-center h-[200px] mx-auto'>
				<div className='text-[25px]'>
					<div className='text-center mb-[20px]'>
						<h1>{state.count}</h1>
					</div>
					<div className='flex gap-[20px] text-white'>
						<button
							className={`disabled:bg-gray-400 disabled:cursor-not-allowed bg-red-400 hover:bg-red-300 active:bg-red-100 duration-[0.3s]rounded-[8px] w-[50px] h-[50px] rounded-[8px]` }
							onClick={() => {
								dispatch({ type: '-' })
							}}
							disabled={state.count==0}
						>
							-
						</button>
						<button
							className=' bg-red-400 hover:bg-red-300 active:bg-red-100 duration-[0.3s] rounded-[8px] w-[100px] h-[50px]'
							onClick={() => {
								dispatch({ type: 'reset' })
							}}
						>
							Reset
						</button>
						<button
							className='bg-red-400 hover:bg-red-300 active:bg-red-100 duration-[0.3s] rounded-[8px] w-[50px] h-[50px]'
							onClick={() => {
								dispatch({ type: '+' })
							}}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
