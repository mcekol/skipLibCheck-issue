// important to import from where the
// interface is re-exported
import { Baz } from './index';

class Bar implements Baz {
	// TypeScript compiler does not complain!
	// The interface is NOT correctly implemented!
	// Misuse of declaration files + skipLibCheck
	// caused a subtle issue which then might lead
	// to runtime issues.
}
