export function saveState<T = object>(storeState: T): boolean {
	try {
		const serializedState = JSON.stringify(storeState);
		localStorage.setItem("state", serializedState);
		return true;
	} catch (error) {
		return false;
	}
}

export function loadState<T = object>(): T | undefined {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState == null) {
			return;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		return;
	}
}
