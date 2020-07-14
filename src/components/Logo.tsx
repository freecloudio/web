import React from 'react';

const Logo: React.FC<{width?: any, height?: any}> = ({width, height, ...props}) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="485.725 131.472 412.387 247.448" width={width} height={height}><g id="Logo"><path d=" M 804.471 203.837 L 747.659 203.837 C 734.125 203.837 723.065 214.897 723.065 228.481 L 723.065 337.661 C 723.223 362.192 698.92 377.5 676.756 378.92 L 570.556 378.92 C 526.116 378.92 487.889 344.783 485.819 300.444 C 483.596 253.075 521.319 213.937 568.183 213.937 L 568.284 213.937 C 572.273 213.937 576.011 211.615 577.576 207.928 C 596.16 163.035 640.347 131.472 691.908 131.472 C 741.901 131.472 784.977 161.115 804.471 203.837" fill="#fff"/><path d=" M 815.632 280.951 C 815.632 285.244 817.348 289.132 820.176 291.909 C 822.953 294.737 826.843 296.455 831.135 296.455 L 851.739 296.455 C 866.283 296.455 877.997 308.473 877.493 323.168 C 876.988 337.107 865.121 348.015 851.132 348.015 L 817.803 348.015 C 815.783 348.015 814.065 349.277 813.409 351.196 C 807.804 367.305 792.452 378.92 774.423 378.92 L 703.673 378.92 C 722.751 373.449 733.165 355.287 733.165 337.661 L 733.165 228.481 C 733.165 220.452 739.68 213.937 747.659 213.937 L 871.685 213.937 C 885.675 213.937 897.641 224.845 898.096 238.833 C 898.601 253.479 886.885 265.499 872.343 265.499 L 831.135 265.499 C 822.549 265.499 815.632 272.416 815.632 280.951" fill="#fff"/></g></svg>
);

export default Logo;