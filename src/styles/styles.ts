import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  totals: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: 8,
  },
  container: {
    borderColor: 'slateblue',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    paddingVertical: 4,
    marginTop: 8,
  },
  list: {
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  rowAlternate: {
    backgroundColor: 'lightskyblue',
  },
  error: {
    color: 'red',
    paddingHorizontal: 4,
  },
  countryText: {
    fontSize: 16,
  },
  flag: {
    width: 30,
    height: 20,
  },
  tableTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  buttonContainer: {
    borderColor: 'slateblue',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    backgroundColor: 'lightblue',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonRow: {
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  countriesContainer: {
    flex: 1,
    margin: 16,
  },
  titleContainer: {
    backgroundColor: 'lightblue',
    borderColor: 'slateblue',
    borderRadius: 8,
    borderWidth: 1,
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: 'slateblue',
    borderRadius: 8,
  },
  listContainer: {
    borderColor: 'slateblue',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'lightblue',
  },
  listTotals: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: 8,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  countryTitleContainer: {
    backgroundColor: 'lightblue',
    borderColor: 'slateblue',
    borderRadius: 8,
    borderWidth: 1,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
