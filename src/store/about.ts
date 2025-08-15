import { Store } from "../core/heropy";

interface State{
	photo : string
	name : string
	email : string
	blog : string
	github : string
	repository : string
}

export default new Store<State>({
	photo : "https://img1.daumcdn.net/thumb/C360x360/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F7604534%2Fattach%2F0e3e0211fc7a48a295e65b10a568f6c5",
	name : 'Keder / KimJongHa',
	email : "whdgk0602@naver.com",
	blog : "https://keder-tips.tistory.com/",
	github : "https://github.com/whdgk0602",
	repository : 'https://github.com/whdgk0602/vanilla-movie-app',
})