import * as React from 'react'

import {
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import { observable } from 'mobx'
import { observer } from 'mobx-react'


declare const global: {HermesInternal: null | {}}


const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 15,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
})


@observer
export class App extends React.Component {
	@observable
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	private buttonCount = 5

	render() {

		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={styles.scrollView}>
						<Header />
						{/* {global.HermesInternal == null ? null :
							(<View style={styles.engine}>
								<Text style={styles.footer}>Engine: Hermes</Text>
							</View>
						} */}
						<View style={styles.body}>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>Step One</Text>
								<Text style={styles.sectionDescription}>
									Edit <Text style={styles.highlight}>App.tsx</Text> to
									change this screen and then come back to see your
									edits.
								</Text>
							</View>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>
									See Your Changes
								</Text>
								<View>
									<ReloadInstructions />
								</View>
							</View>

							<View style={styles.sectionContainer}>
								<Text>
									You pressed button {this.buttonCount} times.
								</Text>
							</View>

							<Button
								onPress={() => this.buttonCount++}
								title="Press me"
							/>

							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>Debug</Text>
								<Text style={styles.sectionDescription}>
									<DebugInstructions />
								</Text>
							</View>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>Learn More</Text>
								<Text style={styles.sectionDescription}>
									Read the docs to discover what to do next:
								</Text>
							</View>
							<LearnMoreLinks />
						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		)
	}
}
